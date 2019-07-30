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

## API Simplification

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
