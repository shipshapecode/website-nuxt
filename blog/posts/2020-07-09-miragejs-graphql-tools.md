---
authorId: chuckcarpenter
categories: 
  - miragejs
  - graphql
date: '2020-07-09'
slug: miragejs-graphql-tools
title: Simplify using MirageJS with GraphQL
---

Using [Mirage](https://miragejs.com/) can be very handy to allow app developers to build features early and not be blocked by an API that doesn't exist yet or that is still in progress. This way you can have a proof of concept or can work on features that simply need to be put in place for persistence somewhere later on.

While this works across many different application stacks, it has traditionally been used expecting a REST style API and it's not completely turn-key for some technologies such as GraphQL. A number of folks, including the Mirage core team, have been working on the best workflows to make that an easier experience. While that is underway, this is how we decided to improve our workflow as the code base grows.

Recently, we needed to apply simulation for a Javascript application using GraphQL. During so, we worked on some utilities to streamline the developer experience for updates and maintanence. The examples for dealing with this are for a very basic use case. 

```js
import { createServer } from 'miragejs';

const graphqlSchema = buildSchema(`
  type Query {
    movies: [Movie]
  }
  type Movie {
    id: ID!
    title: String!
  }
`);

export default function () {
  createServer({
    models: {
      movie: Model
    },

    seeds(server) {
      server.create('movie', { title: 'Interstellar' });
      server.create('movie', { title: 'Inception' });
      server.create('movie', { title: 'The Dark Knight' });
    },

    routes() {
      this.post('/graphql', (schema, request) => {
        const requestJson = JSON.parse(request.requestBody);
        const query = requestJson.query;
        const variables = requestJson.variables;

        const resolver = {
          movies() {
            return schema.db.movies;
          }
        };

        return graphql(graphqlSchema, query, resolver, null, variables);
      });
    }
  })
}
```

This is how the basic recommended configuration is when working with GraphQl. This can work early on, but become problematic to manage when you start to have a much larger schema and need to maintain way more models and relationships for your mocking. Given the following schema:

```graphql
  type Query {
    movies: [Movie]
  }
  type Actor {
    id: ID!
    movies: [Movies]!
    name: String!
  }
  type Distributor {
    id: ID!
    movies: [Movie]!
    name: String!
  }
  type Movie {
    id: ID!
    actors: [Actor]!
    distributor: Distributor!
    title: String!
  }
```

The first thing we can do is automate adding models to our config at build time. This can be done by parsing our schema and some traversing of the parsed AST. 

```js
import { parse } from 'graphql';

const ast = parse(`
  // ...schema
`);

// get the object definitions and fields
const nodeTypes = ast.definitions
  .filter(def => {
    if (def.kind === "ObjectTypeDefinition") {
      const { value } = def.name;

      return !["Query"].includes(value);
    }

    return false;
  })
  .map(filteredDef => {
    return {
      model: filteredDef.name.value,
      fields: filteredDef.fields
    };
  });

// output an object with model mapping
const modelMaps = nodeTypes.reduce((modelAccumulator, node) => {
  modelAccumulator[node.model] = Model;

  return modelAccumulator;
}, {});
```

We can then add that to the configuration for Mirage as `models: modelMaps` and we'll get that automatically registered as we add to our schema. This does get more complicated though, when we start to add associations in our objects and need Mirage to see that as a relationship for queries that load all that data. Ideally, the graph can work for a query like so on the UI:

```graphql
query ListAllMovies {
  movies {
    actors {
      name      
    }
    distributor {
      name
    }
    title
  }
}
```

We first want to identify all the model names (variable `modelNames`). Also, we'll want to reduce the fields we're checking against to only fields that are confirmed to be other object types (variable `modelsReducedFields`). 

```js
  const modelNames = nodeTypes.map(type => type.model);
  
  const modelsReducedFields = nodeTypes.map(node => {
    const nodeFields = node.fields || [];
    const fields = nodeFields.reduce((acc, field) => {
      const { type } = field;

      const isNestedType = node => !node.name && node.type;

      if (isNestedType(type)) {
        const rootField = _getRootType(field);
        const isListType = field.type.type.kind === "ListType";
        const model = rootField.name.value;
        if (modelNames.includes(model)) {
          acc.push({
            name: field.name.value,
            model,
            isListType
          });
        }
        return acc;
      }

      return acc;
    }, []);
  return { ...node, fields };
});
```

Now, what we're doing here with `modelsReducedFields()` is taking each node and reducing the fields down to other models and determining if they are a belongs-to or has-many kind of association. You might have noticed the call to `_getRootType()`, which is just a recursive function to go through nested objects in the AST and get the deepest node's name. I'm showing it independently in the following:

```js
const _getRootType = field => (field.type ? _getRootType(field.type) : field);
```

We can now use this improved array for the `modelMaps` value to get models that have the associations automatically created.

```js
const modelMaps = modelsReducedFields.reduce((modelAccumulator, node) => {
  modelAccumulator[node.model] = Model;
  if (node.fields.length) {
    // any remaining field we know has a model as well
    const fields = node.fields.reduce((fieldsAcc, field) => {
      
      fieldsAcc[field.name] = field.isListType
        ?  hasMany(field.model)
        : belongsTo(field.model);
      return fieldsAcc;
    }, {});

    modelAccumulator[node.model] = Model.extend(fields);
  }

  return modelAccumulator;
}, {});
```

While this may seem like a lot up front for such a small schema, if your schema is larger, or you expect your types to scale, yet still want to use Mirage for simulation or testing coverage, then it's really helpful to get this up front without maintaining those changes over time.

That said, this only automates models and associations. We're still going to need to be explicit with our routes and resolvers to get that data as we add routes and different queries/mutations to our schemas. There are some ways to get those more automated to our build times as well and we'll explore that in a subsequent post on working with Mirage and GraphQL. 
