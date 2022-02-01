---
authorId: JessicaJustice
categories:
  - next.js
  - react
  - javascript
date: '2022-02-01'
slug: when-to-use-nextjs
title: 'The Benefits of Using Next.js'
---

How I was introduced to Next.js / project anecdote

## What Is Next.js?

Next.js is a robust javascript framework designed for web application development. Importantly, Next.js builds upon React, a JavaScript library that makes building frontend user interfaces (UI) quick and efficient.

In some instances, React is sufficient for building out the frontend of a successful web application on its own. However, many developers end up importing a number of external dependencies in order to meet their application's needs. Next.js, however, comes with a number of popular features already built in, while also providing functional and organizational benefits not found in React alone.

## How Is Next.js Different From React?

- React is a JavaScript library, while Next.js is considered a [React framework for production](https://nextjs.org/)
- React is useful for building out a web application's frontend, while Next.js offers some full stack capabilities

### What Are the Key Features of React?

- Frontend JavaScript library
- Makes building reusable components easy
- Uses JSX, a syntax that blends elements of JavaScript and HTML
- Offers state manipulation to provide better user experience
- Rendering occurs on the client side
- No router capabilities built in but react router library available as a dependency
- No strict organizational standards to follow to create your frontend web application

### How Does NextJs Build Upon React?

- More robust -> full stack capabilities -> rendering occurs on the server side
- Built in router option instead of needing an additional dependency -> file tree removes need for router code
- Built in page system determined by file tree
- Built in authentication for Nextjs -> library needed for React
- Clear way to structure files and write code as opposed to more freeform React
- Makes building large-scale react apps easier so that you can get your app into prod faster -> core features are built in from the jump

## Key Features of Next.js

Benefits of Next.js:

- Built in Server-side rendering
  - With React apps, pages render on the client side first, then network requests fetch data to dynamically populate that page which may result in a brief (or long) loading time. Using the server-side rendering capabilities of Next.Js means that you can render a page on the server, and simultaneously fetch data to populate that page, in one go, cutting out the loading time that an individual will experience on the client side.
  - Great for SEO; Server-side rendering means that pages will come back with the HTML as well as the content of the data pulled from the client. This means that search engine crawlers can scan the bulk of a page and find keywords that will help you rankings. Using React alone means only the bare bones of the page, the pure HTML, is rendered such that a search engine crawler can find it.
- Static page generation

  - Pages and data are pre-rendered during the build, then hydrated with your React code so that your functionality comes through on the user end. These pages can then be cached by the server
  - getStaticProps(context) is used in a page file- it’s async and returns a Promise that is an object with a props key - you can run any code you would normally run on the server, you don’t have access to the client side, the return is not returned with the page on the client side, so sensitive data is safe inside this function, gets executed before the page component function to prepare the props that will be passed into that component

- Built in file-based routing
  - Next will automatically look for a page within the file tree (file-based routing) that matches the URL structure
  - No need to import a router library
  - No need for code to define routes (code examples here)
  - Simple and easy to understand as a developer working with the file tree
  - Dynamic routes and nested routes
- Easily incorporate backend code with Node.js in the same project
  - Getting / storing data
  - Adding authentication
  - No stand-alone api project necessary

## Should I Use Next.js on My Next Web Application?

- You are already using React
- SEO is a goal -> applications that want to attract a lot of traffic (maybe not applications that require a log in, since SEO is not a priority there)
- You want to eliminate Loading screens that users would traditionally see with React apps bc data is fetched after the HTML page loads
- You don’t want to manually build out the features that already come with Next.js on your React app (this is possible but extra work)

## Key Takeaways

- Next.js is a JavaScript framework that builds upon the React library to produce production ready applications.
- Server-side rendering is a built-in feature of NextJs that allows developers to cut out loading times experienced by users, while also boosting SEO efforts by rendering pages already populated by relevant data.
- File-based routing is another built-in feature of NextJs that removes the need for importing a router library and instead offers automatic routing - based on the file tree that is simple and easy to understand on the developer’s end.
- You should consider using Next.js to build your next application if you already plan on using React, want to cut back on loading times experienced by users, want to boost your SEO, xyz.

## Conclusion

NextJs is a powerful framework that can help you build upon React to create production ready applications. If you’re interested in learning more about Next.js, or would like to incorporate this framework into your next project, [contact the Ship Shape team](https://shipshape.io/contact/).
