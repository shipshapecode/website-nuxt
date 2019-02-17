const Prism = require('prismjs');
const axios = require('axios');
const path = require('path');
const pkg = require('./package');
const fs = require('fs');
const blogPosts = fs.readdirSync('blog/posts/');

const getBlogPosts = () => {
  const slugs = blogPosts.map((post) => {
    return post.slice(0, -3);
  });

  fs.writeFileSync(
    path.resolve(__dirname, 'posts.json'),
    JSON.stringify(slugs, null, 2)
  );

  return slugs.map(slug => `/blog/${slug}`);
};

const blogPostRoutes = getBlogPosts();

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss',
    'prismjs/themes/prism-okaidia.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-svg',
    '@nuxtjs/sitemap'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'blog')
      });
    }
  },

  generate: {
    routes: []
      .concat(blogPostRoutes)
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://shipshape.io',
    cacheTime: 1000 * 60 * 15,
    generate: true,
    routes: []
      .concat(blogPostRoutes)
  }
};
