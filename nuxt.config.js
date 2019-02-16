const Prism = require('prismjs');
const axios = require('axios');
const path = require('path');
const pkg = require('./package');

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

  sitemap: {
    generate: true,
    routes: () => {
      return axios
        .get('http://localhost:3000/content-api')
        .then(res => {
          return res.data['content-endpoints'];
        })
        .then(endpoints => {
          return Promise.all(
            endpoints.map(endpoint => {
              return axios.get(`http://localhost:3000/content-api${endpoint}`);
            })
          );
        })
        .then(endpoints => {
          return endpoints.reduce((routes, endpoint) => {
            return routes.concat(endpoint.data.map(page => page.permalink));
          }, []);
        });
    }
  }
};
