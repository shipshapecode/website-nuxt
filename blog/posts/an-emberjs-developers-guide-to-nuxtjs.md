---
authorId: rwwagner90
categories: 
  - ember.js
  - nuxt.js
  - vue.js
date: '2019-03-20'
slug: an-emberjs-developers-guide-to-nuxtjs
title: An Ember.js Developer's Guide to Nuxt.js
---

I am a huge Ember.js fan, but recently wanted to experiment with some other frameworks, and decided to try 
[Nuxt.js](https://nuxtjs.org/). I was very pleasantly surprised, that Nuxt had many nice "magic" things, 
just like Ember had, and felt very familiar to Ember development. There were a lot of additional nice features as well, 
like built in PWA support, static site generation, tree shaking, and code splitting. With all of these awesome features, 
I decided to convert [shipshape.io](/) from [Ember](https://github.com/shipshapecode/shipshape.io) to 
[Nuxt](https://github.com/shipshapecode/website-nuxt), and wanted to document the mappings between things in Ember 
and Nuxt and the benefits and drawbacks of each.

## Table of Contents
1. [Application Wrapper](#application-wrapper)
1. [Components](#components)
1. [Routes](#routes)

# Application Wrapper

### templates/application.hbs -> layouts/default.vue

In Ember.js, you will typically setup your main application wrapper, with things like your navbar, footer, etc in
the `templates/application.hbs` file. In Nuxt.js you have the concept of layouts, and `layouts/default.vue` is where
you define your application wrapper markup.

### {{outlet}} -> &lt;Nuxt/&gt;

In Nuxt, you'll define where your application content is inserted with `<Nuxt/>`, rather than the 
`{{outlet}}` you typically have in Ember.


# Components

### components/foo-bar.js + templates/components/foo-bar.hbs -> components/FooBar.vue

### {{yield}} -> &lt;slot/&gt;

# Routes

### routes/foo.js + templates/foo.hbs -> pages/foo.vue

In Ember, your routes have separate `JS` and `hbs` files, but in Nuxt you put your JavaScript, template, and styles
all in one file. I find this to be a big downside of Nuxt, and would really prefer to keep separate files for everything.

# Static Site Generation

Ember has a nice addon, Prember, that allows you to turn your Ember app into a static site.
Static site generation is built into Nuxt out of the box, so you can run `yarn generate` to get a static version
of your site.

# PWA

In Ember, you will need to install several service worker addons to get offline support and caching, but in Nuxt
this is all built in to the framework, which is super nice because you do not have to worry about any of the
service worker internals, and you know the framework has bought into the idea and will continue to support it
as a first class feature.

# Sitemaps

# Code Splitting, Tree Shaking, PurgeCSS, etc


