---
authorId: chuckcarpenter
categories: 
  - miragejs
  - graphql
date: '2020-07-1'
slug: miragejs-graphql-tools
title: Simplify using MirageJS with GraphQL
---

Using Mirage can be very handy to allow app developers to build features early and not be blocked by an API that doesn't yet exist or that is still in progress. This way you can have a proof of concept or can work on features that simply need to be put in place for persistance somewhere later on.

While is works across many different application stacks, it has traditionally been used expecting a REST style API and it's completely turnkey for some technologies such as GraphQL. A number of folks, including the MirageJS core team, have been working on the best workflows to make that an easier experience.

Recently, we needed to apply simulation for a React application using GraphQL. During so, we worked on some utilities to streamline the developer experience for updates and maintanence. The examples for dealing with this are for a very basic use case. 

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

Which can work early on, but become problematic to manage when you start to have a much larger schema and need to maintain way more models and relationships for your mocking.

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

The first thing we can do is to automate adding models to our config at build time. This can be done by parsing our schema and some traversing the created AST. 

```js
import { parse } from 'graphql';

const ast = parse(`
  ...schema
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
const modelMap = nodeTypes.reduce((modelAccumulator, node) => {
  modelAccumulator[node.model] = Model;

  return modelAccumulator;
}, {});
```

You can then add that do the configuration for MirageJS as `models: modelMap` and you'll get that automatically registered as you add to your schema. This does get more complicated though, when we start to add associations in our objects and need Mirage to see that as a relationship for queries that load all that data.

We first want to identify all the model names to identify when you have an association set. Also, you need want to reduce the fields you're checking against to only fields that are confirmed to be other object types. 

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

So, to walk through what we're doing here with `modelsReducedFields()` is to take each node and reduce the fields down to other models and if it's a belongs to or has many kind of association. You might have noticed the call to `_getRootType`, which is just a recursive function to go through nested objects in the AST and get the deepest node's name. It's just the following:

```js
const _getRootType = field => (field.type ? _getRootType(field.type) : field);
```

TODO: update modelMaps to use modelsReducedFields and add the associations




