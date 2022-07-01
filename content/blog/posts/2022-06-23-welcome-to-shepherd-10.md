---
authorId: marikashanahan
categories:
    - shepherd
    - packages
date: '2022-06-23'
slug: welcome-to-shepherd-10
title: 'Welcome to Shepherd 10'
---

## The latest release 🎉
![Screenshot of the shepherd.js homepage showing the features of the library.](/img/blog/shepherd6-site4.png)

Following the Shepherd version 9 release in January 2022, Ship Shape's next major release is here with [Shepherd version 10](https://github.com/shipshapecode/shepherd). This new release delivers more flexible tour options and an even speedier run time for highly dynamic content. 

## Where can I attach my Shepherd Step?
In previous iterations of Shepherd we can define where the `Step` is placed on the DOM with the `attachTo`  object passed as an argument of the options parameter either when setting up a new `Tour` or new `Step` like so:

```js
// Tour
const tour = new Tour({
	steps: [
    { attachTo: { element: '.selector', on: 'top' }, ...moreOptions}
  ]
})

// Step
const step = new Step(tour, {
	attachTo: { element: '.selector' , on: 'top'},
	...moreOptions
})
```
Previously the `element` value could be one of two things: a **DOM selector string** or **HTMLElement**.  These work well for static sites and cases when the element is loaded at build time and is not expected to change. But what about Single Page Applications ([SPAs](https://developer.mozilla.org/en-US/docs/Glossary/SPA))? What any other situation that requires highly dynamic content?

Shepherd 10 now supports a **callback function** that returns a DOM selector string, HTMLElement, undefined, or null as an `element` value. 

```js
const step = new Step(tour, {
	attachTo: { 
    element: () => { '.selector' || HTMLElement || '[data-test-...]' || undefined || null },
	  on: 'top'
  }
}) 
```

We now resolve the `attachTo.element` in the `before-show` phase which by its name resolves the attachTo specifications just once before the Shepherd Step is shown on the DOM. By also **memoizing** the attachTo resolution, the Shepherd 10 delivers a more performant experience to users as they navigate each step in a tour.

## Memo-what?

If you haven't heard of memoization before, not to worry it is simply a way of storing information which in most cases saves time.

> In programming, **memoization is an optimization technique** that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again. --[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)

<iframe src="https://gifer.com/embed/EVRC" width=480 height=276.480 frameBorder="0" allowFullScreen></iframe>
<br/>

It's not surprising that the words `memorize` and `memoize` share the same latin root *memo* which means "to be remembered". Instead of constantly wondering what is in the fridge, writing down your list and carrying it with you to the grocery store is a much cleaner active recall.

For those familiar with Big O notation, memoization is often described as a trade of space for time complexity. We take up a bit more space in the cache in want of faster load time.

## In Action

For those familiar with Shepherd, very little has changed about how you would define the attachTo element. We still require some element to place the step (or null or undefined), but using the callback opens up our options for placing the step.

Here is a simple example where we have a button that expands a custom dropdown menu. However, because menu options are dynamic, they can vary from user to user or login state.
```html
<button class="menu">
	<a class="apples">apples</a>
	<a class="pears">pears</a>
	<!-- etc.. -->
</button>
```

In the tour, let's say we want a Step to eventually attach to `.oranges`. Let's configure the callback to select it by its class name.

```html
<!-- Sometimes will be on the DOM, not always -->
<a class="oranges">oranges</a>
```

```js
const step = new Step(tour, {
	attachTo: { 
    element: () => { '.oranges' },
	  on: 'bottom'
  }
}) 
``` 

And that's it! As long as the callback return value is one of the accepted data types our Step will attach as expected, even to dynamic elements. In previous iterations of Shepherd this was more difficult because the oranges element wouldn't exist at the time of `attachTo` resolution. Let's take a look at another way we can select  `.oranges`.

```js
const step = new Step(tour, {
	attachTo: { 
    element: () => { document.querySelector('.oranges' },
	  on: 'bottom'
  }
}) 
``` 

## Ride into that Danger Zone 🛩

Hope you enjoyed this intro to Shepherd 10! We at Ship Shape are excited to see your projects and how Shepherd can support tours on custom, creative, and boundry-pushing apps. Any questions about Shepherd or its implementation? [Contact the Ship Shape team](https://shipshape.io/contact/) for professional consulting services from the maintenece team themselves.
