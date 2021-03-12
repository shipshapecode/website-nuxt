---
authorId: chuckcarpenter
categories:
  - graphql
  - javascript
  - serverless
date: '2021-03-11'
slug: getting-started-with-serverless
title: Getting Started with Serverless
---

While Ship Shape engineers are deep practioners of Javascript and are often working on web applications for our clients, we sometimes are also creating services for these applications to service functions for the app or provide the data layer and persistance in the form of an API.

We've used a number of languages for these services, but usually default to our expertise in Javascript and work within the Node.js run-time. This works well and we then integrate into whatever deployment pipeline the client may have in place. Recently, we've started creating these services with a serverless cloud solution, rather than deploy to server infrastructure.

Serverless allows abstraction from the infrastructure. You will not have to provision, scale, or maintain servers to execute your applications, databases and/or storage systems. There is no active management, so developers are more empowered to create functions as a service and deploy directly, as well as frequently.

## What we'll work on today

A common need for teams today in their applications is a GraphQL server as the API for data persistance. While not challenging to setup a basic service for use locally, there tend to often be quite a bit more steps for deployment of these APIs for use in various environments. We'll use the Serverless framework to get us started quickly and give us the ability to deploy to many common cloud providers. 

```bash
npx serverless
```

Follow the prompts and this will give you a basic serverless project with all you need to get started. We can change the `serverless.yml` to define our function and the handler specifically for HTTP requests by adding the following:

```yaml
functions:
  graphql:
    handler: handler.graphql
    events:
      - http:
          path: graphql
          method: post
```

For our needs, we'll want to also add a package for Graphql and I'm going to use [apollo-server-lambda](https://www.npmjs.com/package/apollo-server-lambda).

```bash
yarn add apollo-server-lambda
```

Now let's change our function to create a GraphQL server and use it to respond to query requests. For our demonstration, we'll just have it respond to a string for a simple query. 

```js
import { ApolloServer, gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true // this is nice in testing with GraphQL playground
});

export const graphql = server.createHandler();
```

## Try this out locally

Now that you have a basic Lambda as your GraphQL server, you probably want to try it out before getting it out in the internet. Not that this is a requirement, most free tiers of providers make this a free experiment and so there's not risk to just pushing and testing. That said, a couple of packages also make it simple to test your function locally. 

For our basic needs, we'll use the [serverless-offline](https://www.npmjs.com/package/serverless-offline) plugin to emulate AWS Lamdba and API Gateway services on a local server. In this regard we are choosing a vendor in a way, but for our purposes of chosing a path and pushing the code somewhere AWS is the one I'm personally most familiar with and that is the stated provider by default when generating a serverless project.

Also, I like to write in module syntax, so adding [serverless-bundle](https://www.npmjs.com/package/serverless-bundle) to handle basic Webpack configuration for me gives me that flexibility. You can use it for adding Typescript, ESLint, Bable transpiling, and to generate source maps. For this use case though, I'll keep it simple with just our friend Javascript.

At this point, I need to add serverless locally as a dev dependency to my project as well, after the init used `npx` and does not add it at that time since the project didn't have a `package.json` until I added the first dependency.

```bash
yarn add serverless serverless-offline serverless-bundle -D
```

We then just add the config for the plugins to `serverless.yml` at the root:

```yml
plugins:
  - serverless-bundle
  - serverless-offline

custom:
  bundle:
    packager: yarn
  serverless-offline:
    httpPort: 3000
```

After, we can test our function by running the offline start command. Note, I'm using `yarn` to prepend my command so that it looks first as local dependenicies for the executable.

```bash
yarn serverless offline
```

and should give you a nice console output of the following:

```bash
Serverless: Bundling with Webpack...
Serverless: Watching for changes...
offline: Starting Offline: dev/us-east-1.
offline: Offline [http for lambda] listening on http://localhost:3002
offline: Function names exposed for local invocation by aws-sdk:
           * query: graphql-article-dev-query

   ┌─────────────────────────────────────────────────────────────────────────┐
   │                                                                         │
   │   POST | http://localhost:3000/dev/graphql                              │
   │   POST | http://localhost:3000/2015-03-31/functions/query/invocations   │
   │                                                                         │
   └─────────────────────────────────────────────────────────────────────────┘

offline: [HTTP] server ready: http://localhost:3000 🚀
offline:
offline: Enter "rp" to replay the last request
```

I use [GraphQL Playground](https://github.com/graphql/graphql-playground) for my local query testing. After starting that and entering the URL given to me by `serverless-offline`, I'm able to add my simple "hello" query and get a response.

![Graphql playground](/img/blog/getting-started-with-serverless/graphql-playground.png)

## Put our new service somewhere

Now that we know our function works and returns the expected query value, how do we get that in the cloud for use? Assuming you have AWS setup and your CLI credentials (which we don't cover creating here, but this is a nice article about serverless and getting started on AWS), then it's very simple.

```bash
yarn serverless deploy

Serverless: Bundling with Webpack...
Serverless: No external modules needed
Serverless: Packaging service...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service graphql-article.zip file to S3 (1.58 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............................
Serverless: Stack update finished...
Service Information
service: graphql-article
stage: dev
region: us-east-1
stack: graphql-article-dev
resources: 11
api keys:
  None
endpoints:
  POST - https://1yuhqyb55e.execute-api.us-east-1.amazonaws.com/dev/graphql
functions:
  query: graphql-article-dev-query
layers:
  None
```

Which results in the creation of my stack and deployment of my function with API Gateway. Armed with the endpoint generated, we can test our new Graphql server. Using the playground again, we can see the result and I'm also showing the schema displayed from the [introspection query](https://graphql.org/learn/introspection/).

![Graphql playground result from AWS](/img/blog/getting-started-with-serverless/graphql-playground2.png)

## In closing

This is just one basic example of how you can use serverless computing to create services and iterate frequently without infrastructure overhead. Learning this technology has given me some of the same pleasures I recall when I was first creating for the web and could see those results in the browser immediately. I look forward to exploring this outlet in future posts and please feel free to reach out to [ahoy@shipshape.io](mailto:ahoy@shipshape.io) with any questions or requests for future discssions around this topic.
