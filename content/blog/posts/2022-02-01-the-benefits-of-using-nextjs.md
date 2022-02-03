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

## What Is Next.js?

Next.js is a robust JavaScript framework created by [Vercel](https://vercel.com/) and designed for web application development. Importantly, Next.js builds upon React, a JavaScript library that makes building frontend user interfaces (UI) quick and efficient.

In some instances, React is sufficient for building out the frontend of a successful web application on its own. However, many developers end up importing a number of external dependencies in order to meet their application's needs. Next.js, however, comes with a number of popular features already built in, while also providing functional and organizational benefits not found in React alone.

## How Is Next.js Different From React?

- React is a JavaScript library, while Next.js is considered a [React framework for production](https://nextjs.org/)
- React is useful for building out a web application's frontend, while Next.js offers some full stack capabilities
- React renders UI components on the client side of the application, while Next.js offers server-side rendering capabilities
- React alone does not offer built-in page routing (although the [React Router package](https://reactrouter.com/) is available as a dependency), while Next.js features built-in file-based routing
- As a framework, Next.js has a strict organizational structure that developers must follow, while React alone does not

## How Does Next.js Build Upon React?

Next.js retains the following features and capabilities offered by React:

- Makes building reusable components relatively quick and easy
- Only updates elements on the DOM after a relevant piece of state has been manipulated
- Uses [JSX](https://reactjs.org/docs/introducing-jsx.html), a syntax that blends elements of JavaScript and HTML

To build upon React, Next.js also offers additional features that help developers push their React applications into production faster. Below is an overview of some of those essential features that set Next.js apart from React.

### Pre-Rendering Options

On an initial load, web applications built with React will render a page's static elements on the client side. Then, the network requests necessary for fetching any relevant data for that page will fire and any returned data will populate the page where appropriate.

Depending on the number of network requests and the bulk of the data returned, this process can result in either a brief, or potentially sizable, loading time for the end user. To accomodate long loading times, developers often opt to include a helpful component to be displayed on the UI that indicates to the user that the page isn't frozen, just loading.

Next.js, on the other hand, offers server-side rendering as an option for eliminating the delay that occurs between page render and data population. To do this, Next.js will pre-render a page's static elements, then fetch and populate that page with data, before sending the fully generated page to the client. There are two options for pre-rendering pages with Next.js: static page generation and server-side rendering.

#### Static Page Generation

Static page generation pre-renders a page's HTML **at build time**, which can be done either with or without fetching that page's accompanying data. To fetch data at build time, developers can call [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) (a function provided specifically by Next.js), fetch any necessary data within this function, then return this data as props to be passed into the page and displayed on the UI.

```js
  const ExamplePage = ({ exampleProps }) => {
    return (
      //Page components
    )
  };

  export async function getStaticProps() {
    const res = await fetch('https://...');
    const exampleProps = await res.json();

    return {
      props: {
        exampleProps
      }
    };
  };
```

Because static page generation is very quick, and can be cached, Vercel recommends using static page generation wherever possible. If a page on your web application contains data that is not updated frequently, like blog posts or landing pages, it is a prime candidate for static page generation.

#### Server-Side Rendering

For pages that display frequently updated data, developers may want to consider using server-side rendering instead. With this option, the server will generate that page's static HTML **on each request** made by the client.

Similar to static page generation, developers can call the Next.js function, [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props), fetch data within this function, and return it as props to be used by the page.

```js
 const ExamplePage = ({ exampleProps }) => {
   return (
     //Page components
   )
 };

 export async function getServerSideProps() {
   const res = await fetch('https://...');
   const exampleProps = await res.json();

   return {
     props: {
       exampleProps
     }
   };
 };
```

Server-side rendering is powerful, and will always generate a page and any corresponding data that is up-to-date. However, this option is slower than static page generation, so the latter should be implemented whenever a page can be successfully generated ahead of a client request.

### SEO Advantages

The pre-rendering options outlined above come with another distinct advantage: SEO improvements. Pre-rendering a page, and its corresponding data, may help your web application's SEO rankings. This is because web crawlers can access the HTML and the data contained on a pre-rendered page; any keywords web crawlers pick up on are then factored into your ranking. Web applications built solely with React do not offer this advantage; since data is fetched after a page is generated, any keywords contained within that page's data will not be accessible by web crawlers.

### File-Based Routing

Another helpful addition Next.js offers is that of file-based page routing. The file tree of a Next.js repository is organized such that pages can easily be created under the built-in `pages` directory. Any file with a `.js`, `.jsx`, `.ts`, or `.tsx` extension located in the pages directory is automatically made availabe as a route.

- Any file named `index` is recognized by Next.js to indicate the root of the pages directory, or a sub-directory if located in a sub-folder nested within the pages directory.
- Next.js allows for both static and dynamic routes. Static routes are explicitly defined by developers, while dynamic routes are defined using brackets and act as placeholders for a dynamic URL segment.

<img width="970" alt="Screen Shot 2022-02-02 at 10 47 56 PM" src="https://user-images.githubusercontent.com/73088654/152288317-7641a935-fda4-470f-a088-31f4c4513c50.png">

`The file tree above displays a dynamic nested route with a single nested index page, and a static nested route with nested dynamic and static pages.`

The built-in file based page routing offered by Next.js eliminates the need to import a routing library typically required when working with a React application. At the same time, the file-based page structure is great for developer experience as it is intuitive, and eliminates the need for explicitly defining routes within the code itself.

<!-- Not sure if I want to include this next section, this blog is already pretty long -->
<!-- ### Full Stack Options

- Easily incorporate backend code with Node.js in the same project
- Getting / storing data
- Adding authentication
- No stand-alone api project necessary
- Built in authentication for Nextjs -> library needed for React -->

## Should I Use Next.js on My Next Web Application?

The following considerations can help you determine whether Next.js is right for your next project:

- While the two are different in significant ways, it's important to recognize that Next.js builds upon React; if you decide to use Next.js on your next project or application, understand that you’ll also be working with React.
- Do you want to cut back on client-side loading times? Next.js can help speed up page generation through its pre-rendering capabilities.
- It is entirely possible to manually build out some of the capabilities Next.js offers, like importing various libraries to handle things like page routing and pre-rendering capabilities. However, Next.js offers these features from jump so that you can get your application into production faster.
- Is SEO a goal for your project? If attracting significant traffic to your web application is a goal, Next.js can help improve your rankings. If your application is generally not accessible to the public (requires sign-up or log-in to access the majority of your application's features, for example), you may not benefit from SEO improvements.

## Key Takeaways

- Next.js is a JavaScript framework that builds upon the React library to produce production ready applications.
- Pre-rendering is a built-in feature of Next.js that allows developers to cut out loading times experienced by users, while also boosting SEO efforts by rendering pages already populated by relevant data.
- File-based routing is another built-in feature of Next.js that removes the need for importing a router library and instead offers automatic routing that is based on static, dynamic, and nested routes within the pages directory of the file tree. This organizational feature of Next.js is simple and easy for developers to understand.
- You should consider using Next.js to build your next web application if you comfortable using React, want to cut back on loading times experienced by users, want to boost your SEO, and would like to get your application into production quickly.

## Conclusion

Next.js is a powerful framework that can help you build upon React to create production ready applications. If you’re interested in learning more about Next.js, or would like to incorporate this framework into your next project, [contact the Ship Shape team](https://shipshape.io/contact/).
