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
1. [Application Wrapper](#applicationwrapper)
1. [Components](#components)
1. [Routes](#routes)
1. [Static Site Generation](#staticsitegeneration)
1. [Meta](#meta)
1. [PWA](#pwa)
1. [Sitemaps](#sitemaps)
1. [Code Splitting, Tree Shaking, and PurgeCSS](#codesplittingtreeshakingandpurgecss)

# Application Wrapper

### templates/application.hbs -> layouts/default.vue

In Ember.js, you will typically setup your main application wrapper, with things like your navbar, footer, etc in
the `templates/application.hbs` file. In Nuxt.js you have the concept of layouts, and `layouts/default.vue` is where
you define your application wrapper markup.

### {{outlet}} -> &lt;Nuxt/&gt;

In Nuxt, you'll define where your application content is inserted with `<Nuxt/>`, rather than the 
`{{outlet}}` you typically have in Ember.

### Example

##### Ember.js

```handlebars
{{! templates/application.hbs}}

{{head-layout}}

<div 
  itemscope 
  itemtype="https://schema.org/Organization" 
  itemid="shipshapeorg"
>
  <NavMenu/>

  <main>
    {{outlet}}
  </main>

  <WaveFooter/>
</div>
```

##### Nuxt.js

```vue
<!-- layouts/default.vue -->

<template>
  <div
    itemscope
    itemtype="https://schema.org/Organization"
    itemid="shipshapeorg"
  >
    <meta itemprop="legalName" content="Ship Shape Consulting LLC">
    
    <NavMenu/>
    
    <main>
      <Nuxt/>
    </main>
    
    <WaveFooter/>
  </div>
</template>

<script>
  import NavMenu from '~/components/NavMenu.vue';
  import WaveFooter from '~/components/WaveFooter.vue';

  export default {
    components: {
      NavMenu,
      WaveFooter
    }
  };
</script>
```


# Components

With the new angle bracket syntax for Ember's Glimmer components, copying and pasting components into Nuxt/Vue
becomes much easier. Especially with the addition of [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/), 
I did not have to worry much about specific styles for each component.

### components/foo-bar.js + templates/components/foo-bar.hbs -> components/FooBar.vue

In Ember you have separate JS and template files for components, typically housed either in the `components` or
`templates/components` directory. In Nuxt you have just one file, containing the template, script, and styles for
the component. In most cases, the bulk of the code can be directly copied over.

### {{yield}} -> &lt;slot/&gt;

`{{yield}}` is used to pass through the contents of a block component in Ember, and in Nuxt you will replace it with
`<slot/>` instead.

### Example

##### Ember.js

##### Nuxt.js

# Routes

### routes/blog/index.js + templates/blog/index.hbs -> pages/blog/index.vue

In Ember, your routes have separate `JS` and `hbs` files, but in Nuxt you put your JavaScript, template, and styles
all in one file. I find this to be a big downside of Nuxt, and would really prefer to keep separate files for everything.

### model -> asyncData

In Ember, you will typically do all of your data fetching in the [model](https://guides.emberjs.com/v3.8.0/routing/specifying-a-routes-model/) 
hook. Nuxt has a similar concept in its [asyncData](https://nuxtjs.org/api/) method, which will load all the data server side, 
allowing you to do `async` things, before setting the component data, much like Ember waits for the `model` hook to return, 
before rendering the page. 

### Example

##### Ember.js

```js
// routes/blog/index.js

import Route from '@ember/routing/route';
import asyncForEach from 'ember-async-await-for-each';
import fetch from 'fetch';

export default class Blog extends Route {
  async model() {
    let authors = await fetch('/authors/authors.json');
    authors = await authors.json();
    authors = authors.data;

    let posts = await fetch('/posts/posts.json');
    posts = await posts.json();
    posts = posts.data;

    await asyncForEach(posts, async (post) => {
      post.author = await authors.find((author) => {
        return author.id === post.attributes.authorId;
      });
    });

    return posts.sort((post1, post2) => {
      if(post1.attributes.date > post2.attributes.date){
        return -1;
      }

      if(post1.attributes.date < post2.attributes.date){
        return 1;
      }

      return 0;
    });
  }
}
```

```handlebars
<div class="blog-posts section flex flex-wrap justify-center">
  <div class="section-content">
    <div class="flex items-center">
      <h1>Blog</h1>

      <a
        class="p-12"
        href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fshipshape.io%2Ffeed.xml"
        target="_blank"
        rel="noopener"
      >
        {{svg-jar "rss"}}
      </a>
    </div>

    <p>
      Ramblings about Ember.js, JavaScript, life, liberty, and the pursuit of happiness.
    </p>

    <BlogPostMenu
      @navigatePages={{action "navigatePages"}}
      @page={{this.page}}
      @posts={{this.model}}
      @totalPosts={{this.model.length}}
    >
    </BlogPostMenu>
  </div>
</div>
```


##### Nuxt.js

```vue
<template>
  <div class="blog-posts section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex items-center">
        <h1>
          Blog
        </h1>

        <a
          class="p-12"
          href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fshipshape.io%2Ffeed.xml"
          target="_blank"
          rel="noopener"
        >
          <RSS/>
        </a>
      </div>

      <p>
        Ramblings about Ember.js, JavaScript, life, liberty, and the pursuit of happiness.
      </p>

      <BlogPostMenu :posts="posts"/>
    </div>
  </div>
</template>

<script>
  import BlogPostMenu from '~/components/BlogPostMenu.vue';
  import RSS from '~/assets/svgs/rss.svg?inline';
  import { getBlogData } from '~/utils/blog';
  import { generateMeta } from '~/utils/meta';

  export default {
    scrollToTop: true,

    components: {
      BlogPostMenu,
      RSS
    },

    asyncData() {
      return getBlogData();
    },

    head() {
      const title = 'Blog';
      const description = 'Ramblings about Ember.js, JavaScript, life, liberty, and the pursuit of happiness.';
      const url = 'https://shipshape.io/blog/';

      return generateMeta(title, description, url);
    }
  };
</script>
```

# Static Site Generation

Ember has a nice addon, [Prember](https://github.com/ef4/prember), that allows you to turn your Ember app into a static site.
Static site generation is built into Nuxt out of the box, so you can run `yarn generate` to get a static version
of your site.

# Meta

In Ember, there are a few ways to add meta tags for your pages, but [ember-meta](https://github.com/shipshapecode/ember-meta)
is arguably the most popular addon, and the addon used for the [Ember.js website](https://emberjs.com/) meta.

In Nuxt, meta has first class support, and you utilize the built in [head](https://nuxtjs.org/api/configuration-head/)
property to set your meta for each page.

# PWA

In Ember, you will need to install several service worker addons to get offline support and caching, but in Nuxt
this is all built in to the framework, which is super nice because you do not have to worry about any of the
service worker internals, and you know the framework has bought into the idea and will continue to support it
as a first class feature. You do need to ensure [@nuxtjs/pwa](https://github.com/nuxt-community/pwa-module) is
installed, but other than that, it is zero config.

# Sitemaps

Sitemaps in Ember and Nuxt are very similar, and both require the addition of a plugin to generate them. In Ember
we use [prember-sitemap-generator](https://github.com/shipshapecode/prember-sitemap-generator) and in Nuxt we use
[@nuxtjs/sitemap](https://github.com/nuxt-community/sitemap-module). Unless you have no dynamic routes, 
both require that you pass the urls for all of your pages in, and output the resulting sitemap.

# Code Splitting, Tree Shaking, and PurgeCSS

Features like code splitting and tree shaking have been experimented with in Ember and efforts to support them are 
[in progress](https://emberjs.com/statusboard/), however they are not currently usable or stable. Additionally,
due to the dynamic nature of classes in Ember, and the lack of explicit template imports, it is currently not
possible to use PurgeCSS, without a lot of manual work.

Code Splitting, Tree Shaking and PurgeCSS all work out of the box with Nuxt, and the only additional thing to install
is the [nuxt-purgecss](https://github.com/Developmint/nuxt-purgecss) module.


