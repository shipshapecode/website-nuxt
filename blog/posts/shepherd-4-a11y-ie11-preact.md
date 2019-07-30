---
authorId: rwwagner90
categories: 
  - a11y
  - CSSinJS
  - preact
  - shepherd.js
  - site tour
date: '2019-07-30'
nextSlug: ember-2019
nextTitle: Ember 2019
previousSlug: ember-data-passing-query-params-to-save
previousTitle: Ember Data | Passing query params to .save()
slug: shepherd-4-a11y-ie11-preact
title: 'Shepherd 4.0: a11y, IE 11 support, and Preact Components'
---

Shepherd.js has come a long way since its inception in 2014, and I am very pleased to announce the
next major release, Shepherd 4.0! 🎉

We rewrote a significant chunk of the library from the ground up, using Preact and nano-css, switched styles
from SCSS to CSSinJS, simplified the API, and tweaked the demo and API docs for a more cohesive experience.
We also solidified our IE11 support, and made everything work out of the box with no need to add any more
polyfills yourself, and focused heavily on improving our a11y support.

## Table of Contents
1. [API Simplification](#apisimplification)
1. [IE 11 Support](#ie11support)
1. [CSSinJS](#cssinjs)
1. [Preact](#preact)
1. [a11y](#a11y)
1. [New JSDoc Site](#newjsdocsite)
1. [New Website](#newwebsite)

## API Simplification

TODO

## IE 11 Support

TODO

## CSSinJS

After a lot of searching for the smallest CSSinJS library, we settled on using nano-css. It is small
and simple, but also provides a powerful API. It allows for setting prefixes for class names as well,
which has helped us launch our new prefixing feature. 

You can pass `classPrefix` in your tour options, and all `shepherd-*` classes will be prefixed. 
For example `classPrefix: 'my-prefix'` would yield `my-prefix-shepherd-*` style classes. 
This is an important feature if you potentially need to run two separate Shepherd instances and 
ensure they do not conflict with one another.

## Preact

Switching to Preact components allowed us to greatly simplify our code. We had a lot of manual calls
to create DOM, add and remove classes, and keep everything in sync with the tour options. Now everything
is split into logical components. Things like the header, content, footer, cancel button, etc are all
components now and handle their own logic, styles and classes.

## a11y

TODO

## New JSDoc Site

We were previously using [ESDoc](https://esdoc.org/) to generate our API docs, but it was hard to customize,
and we found ourselves wanting a nicer looking solution, that allowed us to nest our
other pages alongside the generated docs. After spending several days exploring various
tools, we finally decided to use JSDoc and to fork and extend a nice existing theme.

The original theme is [here](https://github.com/braintree/jsdoc-template) and our extended and tweaked theme, 
used for our doc site currently, can be found [here](https://github.com/shipshapecode/jsdoc-template-ship-shape).

JSDoc has the concept of tutorials, which are extra pages you want to add to your docs. We used these
to add a section on theming and our existing usage docs, and nest them alongside the generated API docs,
instead of being separate, like they were before.

Having everything in one place should make for a much more cohesive and easy to follow docs experience.

## New Website

TODO
