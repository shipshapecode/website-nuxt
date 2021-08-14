import fs from 'fs';
import path from 'path';
import highlightjs from 'highlight.js';
import hljsDefineGraphQL from 'highlightjs-graphql';
import truncate from 'lodash.truncate';
import showdown from 'showdown';

const converter = new showdown.Converter();

hljsDefineGraphQL(highlightjs);
// TODO: Get hljs Vue support

const isProd = process.env.NODE_ENV === 'production';

const imgSrc = 'http://i.imgur.com/30OI4fv.png';
const twitterUsername = '@shipshapecode';

const constructFeedItem = (post, dir, hostname) => {
  // note the path used here, we are using a dummy page with an empty layout in order to not send that data along with our other content
  const filePath = path.join(__dirname, `dist/blog/${post.slug}/index.html`);
  const content = fs.readFileSync(filePath, { encoding: 'utf8' });
  const url = `${hostname}/${dir}/${post.slug}`;
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content
  };
};

const createRSSFeed = async (feed, args) => {
  const filePath = 'blog/posts';
  const hostname = isProd ? 'https://shipshape.io' : 'http://localhost:3000';
  feed.options = {
    title: 'Ship Shape Insights',
    description:
      'Our thoughtful ramblings about Ember.js, Nuxt.js, JavaScript, life, liberty and the pursuit of happiness.',
    link: `${hostname}/feed.xml`
  };
  const { $content } = require('@nuxt/content');
  const posts = await $content(filePath).fetch();

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname);
    feed.addItem(feedItem);
  }
  return feed;
};

const createSitemapRoutes = async () => {
  const routes = [];
  const { $content } = require('@nuxt/content');
  const authors = await $content('blog/authors').fetch();
  const posts = await $content('blog/posts').fetch();

  for (const author of authors) {
    routes.push(`blog/authors/${author.id}`);
  }

  for (const post of posts) {
    routes.push(`blog/${post.slug}`);

    for (const category of post.categories) {
      const categoryRoute = `blog/categories/${category.replace(/ |\./g, '-')}`;
      if (!routes.includes(categoryRoute)) {
        routes.push(categoryRoute);
      }
    }
  }

  return routes;
};

export default {
  target: 'static',

  components: true,

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Ship Shape',
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
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: twitterUsername
      },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: imgSrc }
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
    'aos/dist/aos.css',
    'highlight.js/styles/github.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
    { src: '~/plugins/vue-flash-message', mode: 'client' },
    { src: '~/plugins/vue-inline-svg' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module', // TODO: get stylelint passing,
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-84561982-1',
        debug: {
          sendHitTask: isProd
        }
      }
    ],
    '@nuxt/image',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources'
  ],

  optimizedImages: {
    optimizeImages: true
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/content',
    '@nuxtjs/feed',
    [
      'nuxt-font-loader-strategy',
      {
        fonts: [
          {
            fileExtensions: ['woff2'],
            fontFamily: 'Pier Sans',
            fontFaces: [
              {
                preload: true,
                localSrc: ['Pier Sans'],
                src: '@/assets/fonts/PierSans-Regular',
                fontWeight: 'normal',
                fontStyle: 'normal'
              },
              {
                preload: true,
                localSrc: ['Pier Sans'],
                src: '@/assets/fonts/PierSans-Bold',
                fontWeight: 'bold',
                fontStyle: 'normal'
              },
              {
                preload: true,
                localSrc: ['Pier Sans'],
                src: '@/assets/fonts/PierSans-Light',
                fontWeight: 300,
                fontStyle: 'normal'
              }
            ]
          }
        ]
      }
    ],
    ['@nuxtjs/date-fns', { methods: ['format', 'parseISO'] }],
    '@nuxtjs/tailwindcss',
    [
      'nuxt-validate',
      {
        classes: true,
        classNames: {
          invalid: 'error'
        }
      }
    ],
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true
      }
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    // Set to true to pull common CSS into separate files
    extractCSS: true,

    babel: {
      presets({ envName }) {
        const envTargets = {
          client: { browsers: 'last 2 versions, not dead, not IE 11' },
          server: { node: 'current' }
        };
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 },
              targets: envTargets[envName]
            }
          ]
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
    },

    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  content: {
    markdown: {
      highlighter(rawCode, language) {
        const highlightedCode = highlightjs.highlight(rawCode, {
          language
        }).value;

        // We need to create a wrapper, because
        // the returned code from highlight.js
        // is only the highlighted code.
        return `<pre><code class="hljs ${language}">${highlightedCode}</code></pre>`;
      }
    }
  },

  dateFns: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
    format: 'MM/dd/yyyy'
  },

  feed: [
    {
      path: '/feed.xml',
      create: createRSSFeed,
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ],

  generate: {
    fallback: '404.html'
  },

  purgeCSS: {
    whitelistPatterns: [/^hljs/, /^page-/]
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://shipshape.io',
    cacheTime: 1000 * 60 * 15,
    routes: createSitemapRoutes,
    filter({ routes }) {
      return routes.map((route) => {
        route.url = `${route.url}/`;
        return route;
      });
    }
  },

  styleResources: {
    scss: ['./assets/css/_variables.scss']
  },

  tailwindcss: {
    jit: true
  },

  hooks: {
    'content:file:beforeInsert': async (document, database) => {
      if (document.extension === '.md' && document.dir === '/blog/posts') {
        const html = converter.makeHtml(document.text);
        const description = truncate(html.replace(/(<([^>]+)>)/gi, ''), {
          length: 260,
          separator: /,?\.* +/
        });

        document.description = description;

        const author = await database
          .query(`/blog/authors/${document.authorId}`)
          .fetch();

        document.author = author;
      }
    }
  }
};
