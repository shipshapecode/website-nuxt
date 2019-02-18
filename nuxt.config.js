const Prism = require('prismjs');
const fs = require('fs');
const path = require('path');
const pkg = require('./package');

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

const imgSrc = 'http://i.imgur.com/30OI4fv.png';
const twitterUsername = '@shipshapecode';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'referrer', content: 'unsafe-url' },
      { property: 'og:site_name', content: 'Ship Shape' },

      // Opengraph
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: imgSrc },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:height', property: 'og:image:height', content: '256' },
      { hid: 'og:image:width', property: 'og:image:width', content: '256' },

      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: twitterUsername },
      { hid: 'twitter:creator', name: 'twitter:creator', content: twitterUsername },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: imgSrc }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
    '@nuxtjs/date-fns',
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    'nuxt-svg',
    '@nuxtjs/sitemap'
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,

    babel: {
      presets({ isServer }) {
        const targets = isServer ? { node: '10' } : {
          browsers: [
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Safari versions'
          ]
        };
        return [
          [require.resolve('@nuxt/babel-preset-app'), { targets }]
        ];
      }
    },
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

  dateFns: {
    locales: ['en'],
    defaultLocale: 'en',
    format: 'MM/DD/YYYY'
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
