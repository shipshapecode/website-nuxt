---
authorId: jaredgalanis
categories:
  - ember.js
  - glimmer
  - javascript
  - serverless
date: '2021-02-21'
slug: serverless-functions-ember-glimmer
title: Serverless Functions in Ember and Glimmer
---

I have recently spent some time looking at [API Routes](https://nextjs.org/docs/api-routes/introduction) in Next.js and I must say that I've been very happy with the value-add and developer experience / ergonomics they provide. 

I really wanted to leverage that same functionality in Ember and Glimmer, and that is what we'll cover in this post.

## Table of Contents
1. [Next API Routes](#nextapiroutes)
2. [Netlify Dev](#netlifydev)
3. [Netlify functions with Ember](#netlifyfunctionswithember)
4. [Netlify functions with Glimmer](#netlifyfunctionswithglimmer)
5. [Vercel Dev](#verceldev)
6. [Vercel functions with Ember](#vercelfunctionswithember)
7. [Vercel functions with Glimmer](#vercelfunctionswithglimmer)

## Next API Routes

If you are not familiar with Next's API routes, they are essentially node functions that deploy as serverless lambdas. These functions can be used in a lot of different ways: 

- they could provide a place to write a GraphQL endpoint
- they could serve as a gateway to other API's
- they could serve as a full-fledged backend that talks to a persistence layer

There a lot of possibilities here. API routes are especially helpful when performing operations that need to access secret environment variables that you would typically not want exposed to your client. For instance, if you need to generate presigned AWS s3 urls for the client to post files to.

From a developer efficiency perspective, this could help unblock frontend developers on your team from waiting for backend developers to be available for certain tasks. Since API routes provide, well, an API, you could develop certain server side features alongside your frontend without much loss of context.

Developing a Next.js API route is a seamless experience. The API routes all live in an `api` directory at your project's root. Spinning up the development server that powers the client side of the Next application will also spin up a server for the api routes, do some proxy magic, and make it feel as if you have one development server.

There is essentially zero-configuration involved. Vercel really nailed the developer experience with these API routes. Deploying to Vercel's platform is, of course, a snap, but you can deploy elsewhere relatively easily too.

Being able to write these functions in such a well-integrated fashion was very exciting. And it left me wondering about obtaining a similar experience in the JavaScript framework that I enjoy working with the most, [Ember](https://emberjs.com/). Also having recently explored [Glimmer](https://glimmerjs.com/), I was curious about whether these functions could be used with Glimmer too. 

After a bit of investigation, I'm happy to report that because of tooling that is already available it is fairly trivial to get essentially the same value-add and developer experience with both Ember and Glimmer, or any other framework you might choose.

Now before we proceed, it is worth pointing out that we are not talking about server-side rendering or static site generation tools in this post. Next provides both of those things, and I mention this because I have found that when I bring up the topic of API routes, many people assume I'm talking about one of those solutions, but I am not here. We may follow up later with posts about server-side rendering and/or static site generation, but that's a topic for another day.


## Netlify Dev

Okay, with that in mind the first solution I explored was [Netlify Dev](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md). Netlify Dev provides all the features of deploying to Netlify, including serverless functions, and brings them to the local development enviroment as part of [Netlify CLI](https://docs.netlify.com/cli/get-started/#get-started-with-netlify-dev). Essentially, Netlify Dev allows you to write and serve functions locally alongside your client-side code, just like Next's API routes. These functions can be written in node or Golang, but we'll focus on node for now.

### Netlify functions with Ember

So that's great, but does it work well with Ember? It sure does. 😊

Netlify Dev has [framework detection](https://github.com/netlify/netlify-dev-plugin/tree/master/src/detectors) for many popular frameworks, including Ember, so it's super easy to get up and running in very little time.

After installing netlify-cli globally with `npm install -g netlify-cli`, you'll want to ensure you are authenticated with netlify-cli and that your project is initialized with netlify or [linked to Netlify](https://docs.netlify.com/cli/get-started/#link-and-unlink-sites).

On a new Ember project that I just published to Github I was able to run:
```js
netlify init
```
And netlify-cli walks you through the setup. One thing you might notice is that many of the default options (like the build command and the location of build artifacts to deploy) are preset correctly for Ember, this is magic of framework detection at work! 

You might also notice that a functions directory was created for us inside of the Ember project at the root. This is where your serverless functions will live. 

Be sure to answer yes to the cli's offer to create a `netlify.toml` file, we'll need it in just a bit.

To create a serverless function it's very easy, all you need to do is run the create command and pass it a name of a function:

```js
netlify functions:create hello-world
```

You may be presented with some options on type of function you want to create using netlify's templates. For now we'll go with the basic function (most likely the first option). This will create a directory and function `.js` file for you at `./functions/hello-world/hello-world.js` with all the boiler plate that is needed for a netlify serverless node function to run.

Now if you spin up the development server you'll notice that Netlify dev will serve our Ember app for us at `localhost:8888`. To do that simply run:

```js
netlify dev
```

The default path for functions, `/.netlify/functions/`, is a little funky so we'll customize it. We'll call our custom path `ember-api-routes`. Add this to the autogenerated `netlify.toml` referred to above (you can either ignore or delete the auto generated and commented-out redirects config):

```toml
  [[redirects]]
    from = "/ember-api-routes/*"
    to = "/.netlify/functions/:splat"
    status = 200
```

If you now visit `http://localhost:8888/ember-api-routes/hello-world` in your browser you should see:

```js
{
  message: "Hello World"
}
```

Boom, you've got API routes on Ember working locally using Netlify Dev 🔥! 


Make a few tweaks, add an `application.js` route that uses fetch to data from the new function at `/ember-api-routes/hello-world`, and you can use it just as you would most any API. Here we're returning the response to the `application.js` route model hook and using it in the `application.hbs` template, passing it down as an argument to Ember's `<WelcomePage />` component to display the message.

![Hello World Serverless Function Ember](/img/blog/serverless-functions-ember-glimmer/ember-hello-world.png)

Deploying to netlify is also super easy, but we won't cover that subject here as there are plenty of resources around it. Suffice it to say that if you deploy your site with Netlify it should JustWork™️ in the same way you just experienced in your local dev environment. Netlify will handle deployment of the serverless functions seamlessly.

As I said, there are a ton of different ways you could use these serverless functions in your project, so use them as you see fit.

### Netlify functions with Glimmer

Okay, but what about when your framework is not part of the magical framework detection provided by Netlify Dev? Fortunately, that only requires a little bit of additional setup that we'll cover next.

Follow the same steps described above, but with your Glimmer project. I may note that I used [glimmerx](https://github.com/glimmerjs/glimmer-experimental/) for purposes of this investigation. YMMV if you're using a different version of glimmer.

You will notice that because there is no framework detected that Netlify Dev supports you won't have preset defaults to help you through the cli wizard after running `netlify init`. 

No problem. Here is the output from the cli and the answers you'll need to get up and running:

```bash
? Your build command (hugo build/yarn run build/etc): npm run build
? Directory to deploy (blank for current dir): dist
? Netlify functions folder: functions
? No netlify.toml detected. Would you like to create one with these build settings? Yes
```

Create your function in the same way that we did for Ember using `netlify functions:create hello-world`.

Now go ahead and open the `netlify.toml` file that was just autogenerated as we'll need to add a few things to this. First, Netlify Dev needs to know more about your framework since it was not detected. Go ahead and add this to the toml:

```toml
[dev]
  command = "npm run start"
  targetPort = 8080
  autoLaunch = true
  framework = "#custom"
```

Also add a similar redirects configuration we added in the Ember app's toml:

```toml
[[redirects]]
  from = "/glimmer-api-routes/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

You should be able to visit your Glimmer app at `http://localhost:8888` and see that Netlify Dev is serving it. You also should be able to visit your serverless function by going to `http://localhost:8888/glimmer-api-routes/hello-world` and in your browser, you should again see:

```js
{
  message: "Hello World"
}
```

Now you've got Glimmer with API routes running locally!

We can similarly make a few tweaks to load the data using fetch from the default `App.js` Glimmer component and display it in the template:

![Hello World Serverless Function Glimmer](/img/blog/serverless-functions-ember-glimmer/glimmer-hello-world.png)


## Vercel Dev

What about alternative platforms? Do we have to use Netlify? Thankfully, you can just as easily use Vercel's platform to locally develop your Ember or Glimmer app with [serverless functions](https://vercel.com/docs/serverless-functions/introduction) and deploy it all to [Vercel](https://vercel.com) as well. Vercel has a similar [cli](https://vercel.com/docs/cli) and it also offers a [dev](https://vercel.com/docs/cli#commands/dev) command to simulate the Vercel deployment environment locally.

The first step is to ensure you have the Vercel CLI installed globally by running `npm i -g vercel`. 

### Vercel functions with Ember

Inside your Ember project all you need to do is run `vercel dev` and the Vercel CLI should kick off a similar wizard that asks if you want to set up and develop your project. 

Again you'll notice that through framework detection, which Vercel CLI also has, there are autodetected project settings for Ember that you can accept. Your project will be automatically run at `http:localhost:3000`. 

Now, you can create an `api` directory at your project root and create a `hello-world.js` file inside of that. Go ahead and insert this into `./api/hello-world.js`:

```js
module.exports = (req, res) => {
  res.status(200).json({ message: 'Hello World' });
};
```

If you're familiar with Next.js API routes this syntax will look very similar, aside from the export it is identical to how you would write a Next API route.

That's really it. If you visit `http://localhost:3000/api/hello-world` (after rebooting the dev server) you'll see your API route running alongside Ember! It's also extremely straight forward to deploy an Ember app to [Vercel](https://vercel.com/guides/deploying-ember-with-vercel).

### Vercel functions with Glimmer

Again for Glimmer it is a very similar process, but with a few additional pieces of manual configuration that you'll need to apply as part of the setup with Vercel CLI. 

Inside your Glimmer project run `vercel dev`. You will be presented with the same wizard as with the Ember app, only this time the wizard will indicate that no framework was detected and will ask if you want to override the default project settings, answer yes to this. 

You'll be asked which settings you'd like to override, you can press the `a` key to select all of them. You should answer the prompts as follows:

```bash
? What's your Build Command? npm run NODE_ENV=production webpack
? What's your Output Directory? ./dist
? What's your Development Command? webpack-dev-server --port $PORT
```

Again, the dev server will boot and Glimmer will be served at `http://localhost:3000`. Now follow the same instructions to add `./api/hello-world.js`, with the same contents. If you reboot the dev server you should be able to visit `http://localhost:3000/api/hello-world` and see your API route running alongside Glimmer!

## Wrap Up

Obviously, this was just an introduction to the setup of using serverless functions in Ember and Glimmer. We've only scratched the suface of what you can do with serverless functions or what the tradeoffs are of using them. 

In the future we may explore those issues and some more customized options for development and deployment if you don't want to use one of the two platforms discussed here.

Hopefully, this helps you in your exploration of serverless functions with Ember and Glimmer.
