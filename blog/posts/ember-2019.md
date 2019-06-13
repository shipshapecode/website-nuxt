---
authorId: rwwagner90
categories: 
  - '2019'
  - code splitting
  - ember.js
  - PWA
  - roadmap
  - tree shaking
date: '2019-06-12'
nextSlug: an-emberjs-developers-guide-to-nuxtjs
nextTitle: An Ember.js Developer's Guide to Nuxt.js
previousSlug: ember-data-passing-query-params-to-save
previousTitle: Ember Data | Passing query params to .save()
slug: ember-2019
title: Ember 2019
---

A few months back, I converted my website from Ember.js to Nuxt.js. I did this mostly to try something new out,
just for fun, but as I used it more and more, I found Nuxt really had some advantages over Ember, at least for this
site in particular. I wrote some of my findings in a [blog post comparing Ember.js to Nuxt.js](https://shipshape.io/blog/an-emberjs-developers-guide-to-nuxtjs/), 
but I wanted to apply some of these things to a post for my desires for the Ember 2019 roadmap as well.

## Automagic Modern Web Apps

One of the things I have always loved about Ember, is its magic. For the most part, you can run `ember s` and things
"just work". You do not have to spend hours customizing webpack or rollup, choosing a routing library, or figuring
out how to structure your project. This was great, for many years, but other frameworks have caught up now, and the
breadth of things a new web app should support, out of the box, has increased significantly. 

There are several addons for adding modern web app features like [ember-service-worker](https://github.com/dockyard/ember-service-worker), 
which allows you to add service workers to your app easily, and [prember](https://github.com/ef4/prember), which allows you to statically generate 
your Ember app, but these addons are not maintained by the Ember Core Team, so there is no guarantee they will continue to work or play
nicely together. I would like to see Ember support many of these features, in the framework itself.

### PWA

ember-service-worker could be added by default or similar functionality could be baked into the Ember codebase itself. 
We could then support various types of service workers. For SPA mode, we would use the default [ember-service-worker-index](https://github.com/DockYard/ember-service-worker-index),
which would cache the single `index.html` for the app, but for static sites, generated with Prember, we would need to cache a separate html file per route. 
This can be accomplished by using [ember-service-worker-prember](https://github.com/shipshapecode/ember-service-worker-prember), although the cache busting
does still need some work.

### SSR / SPA / Static 

The default mode, for an Ember app out of the box, is to be a single page application. Server side rendering is supported, via [ember-cli-fastboot](https://ember-fastboot.com/),
and while fastboot does have core team support, it is still a separate addon to install. Static apps are supported via Prember, which was written by Ed Faulkner,
an Ember Core Team member, but it is not officially supported by the core team.

I would like to see all three rendering modes supported out of the box, and configurable via `ember-cli-build.js`. This would both guarantee buy in and future 
support from the core team, as well as make it easier to choose a rendering mode via a simple config, without the need for installing more addons.

### HTML Head

One major thing modern web apps need, is the ability to define `head` data. This allows you to do things like set opengraph tags per page, to allow for rich
previews of your website when posting on social media, and to set various meta which helps with SEO. Currently, addons like [ember-meta](https://github.com/shipshapecode/ember-meta)
allow you to set these values.

It would be convenient if Ember allowed setting head data from the route. We could provide a `head()` hook, in which you could return an object to set the data 
for the page. Something like:

```js
head() {
  return {
    title: 'Page Title',
    meta: [
      {
        name: 'description',
        content: 'Page description here'
      }
    ]
  }
}
```

### Code splitting and Tree Shaking

Code splitting and tree shaking have been in the works for several years in Ember. There were a few somewhat working
implementations, but ultimately, they were abandoned. Ember's unique architecture makes allowing for code splitting and
tree shaking hard, but we really should prioritize this work. Ember is one of the largest JS frameworks, so when working
on small apps or websites, being able to tree shake out the parts of the framework you are not using, would go a long way
in reducing the overall payload.

## Tooling

Ember Inspector has come a long way, since we started working on it in February of 2018, but it still has a long way
to go. We redesigned a few things, removed some cruft, and started working toward supporting Octane, but Ember Inspector
could still really use a full redesign, and should incorporate many of the long requested features, as well as pull in
anything that would be nice to have from Vue and React DevTools.