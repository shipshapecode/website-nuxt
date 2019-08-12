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
previousSlug: exporting-typescript-imports
previousTitle: 'Exporting Imported TypeScript Types'
slug: shepherd-4-a11y-ie11-preact
title: 'Shepherd 4.0: a11y, IE 11 support, and Preact Components'
---

Shepherd.js has come a long way since its inception in 2014, and I am very pleased to announce the
next major release, Shepherd 4.0! 🎉 It is now easier than ever to create full featured site tours
for your website or app.

[![Shepherd.js Logo](/img/blog/shepherd-4-a11y-ie11-preact/shepherd-logo.png)](https://shepherdjs.dev/)

We rewrote a significant chunk of the library from the ground up, using [Preact](https://preactjs.com/) and 
[nano-css](https://github.com/streamich/nano-css), switched styles from SCSS to CSSinJS, simplified 
the API, and tweaked the demo and API docs for a more cohesive experience.
We also solidified our IE11 support, and made everything work out of the box with no need to add any more
polyfills yourself, and focused heavily on improving our a11y support.

## Table of Contents
1. [API Simplification](#apisimplification)
1. [IE 11 Support](#ie11support)
1. [Styles](#styles)
1. [Preact](#preact)
1. [a11y](#a11y)
1. [Revamped Demo](#revampeddemo)
1. [New JSDoc Site](#newjsdocsite)
1. [New Website](#newwebsite)

## API Simplification

We had several APIs that accepted more than one input format, such as `attachTo` and 
`advanceOn`, which was both making the code harder to maintain and causing unnecessary 
confusion for users. In the spirit of keeping things simple, we removed the `string` options
in favor of passing an `object` hash of options. For example `attachTo` now only supports
this format:

```js
tour.addStep({
  attachTo: {
    element: '.my-class-selector',
    on: 'bottom'
  }
});
```

## IE 11 Support

We always advertised IE 11 support, but we did not test it as often as we should have. 
Sometime during the 2.x or 3.x era, we unwittingly broke support for IE. Most people did not
notice, as you are likely already shipping a ton of polyfills, if your app supports IE, but
for those who were not, things were broken.

We tried to remove some usage of ES2015+ features that IE did not support, and we also
started shipping the minimum polyfills needed for IE compatibility. This does add a bit of
bloat for people who do not intend to support IE, but we wanted to ship what we promised first,
and work on opting in/out to the IE polyfills later.

## Styles

### CSSinJS

We wanted to find an easy way to include all of our styles in our JS bundle, rather than shipping separate
stylesheets, and we decided we wanted to explore CSSinJS solutions to solve this.
After a lot of searching for the smallest CSSinJS library, we settled on using [nano-css](https://github.com/streamich/nano-css).
It is small and simple, but also provides a powerful API. 

Including the styles in the JS does increase the bundle size, but it is the same amount of bytes, or less, 
as including the old stylesheets separately. nano-css also allows for setting prefixes for class names as well,
which has helped us launch our new prefixing feature. 

### classPrefix

You can pass `classPrefix` in your tour options, and all `shepherd-*` classes will be prefixed. 
For example `classPrefix: 'my-prefix'` would yield `my-prefix-shepherd-*` style classes. 
This is an important feature if you potentially need to run two separate Shepherd instances and 
ensure they do not conflict with one another.

### styleVariables

This also allowed us to revamp our approach to overriding style variables for theming. Previously,
we used SCSS and SASS maps to allow overriding style variables. This worked, but required you to use
SASS yourself. Now, with nano-css we are able to pass in JavaScript variables to set the styles. We do
this via a `styleVariables` hash in your tour config.

```js
const tour = new Shepherd.Tour({
  ...
  styleVariables: {
    shepherdThemePrimary: '#00213b',
    shepherdThemeSecondary: '#e5e5e5'
  },
  ...
});
```

You can see a full breakdown of the variables you can override [here](https://shepherdjs.dev/docs/tutorial-03-styling.html).

## Preact

Switching to [Preact](https://preactjs.com/) components allowed us to greatly simplify our code. We had a lot of manual calls
to create DOM, add and remove classes, and keep everything in sync with the tour options. Now everything
is split into logical components. Things like the header, content, footer, cancel button, etc are all
components now and handle their own logic, styles and classes.

## a11y

There was an [issue](https://github.com/shipshapecode/shepherd/issues/198) opened on the Shepherd GitHub 
repo awhile ago, asking about a11y support. We had always wanted to make Shepherd as accessible as possible, 
but lacked the knowledge on what exactly to do. Luckily, with help from [@gorner](https://github.com/gorner)
and [@knoobie](https://github.com/knoobie), as well as an [amazing post](https://bitsofco.de/accessible-modal-dialog/) 
on making modal dialogs accessible, we were able to ship arrow key navigation, the proper `aria` attributes,
focus trapping, etc to make things more accessible for both keyboard users and screen readers.

## Revamped Demo

[![Shepherd.js Demo](/img/blog/shepherd-4-a11y-ie11-preact/demo.png)](https://shepherdjs.dev/demo/)

We revamped our outdated demo and tweaked the styles a bit, to make things a bit more modern.
We plan to release several different demos and examples showing off all the possibilities of
Shepherd in the coming months. Stay tuned!

## New JSDoc Site

[![Shepherd.js JSDoc API Documentation](/img/blog/shepherd-4-a11y-ie11-preact/docs.png)](https://shepherdjs.dev/docs/)

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

[![Shepherd.js Landing Page](/img/blog/shepherd-4-a11y-ie11-preact/landing.png)](https://shepherdjs.dev/)


As things were evolving for 4.0, we realized we needed a dedicated home for all things Shepherd, and bought the
domain [https://shepherdjs.dev/](https://shepherdjs.dev/). We have slowly been rebranding the demo page, and plan
to host all the docs, demos, examples, and a landing page on this new site.

We hope everyone will try out the new and improved Shepherd 4.0 and please let us know your thoughts!

***If you would like us to help integrate Shepherd into your app, please [contact us](https://shipshape.io/contact/). We would love to 
work with you!***
