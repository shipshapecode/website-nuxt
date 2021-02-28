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

export default {
  target: 'static',

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Ship Shape',
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
    '@nuxtjs/gtm',
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
      highlighter(rawCode, lang) {
        const highlightedCode = highlightjs.highlight(lang, rawCode).value;

        // We need to create a wrapper, because
        // the returned code from highlight.js
        // is only the highlighted code.
        return `<pre><code class="hljs ${lang}">${highlightedCode}</code></pre>`;
      }
    }
  },

  dateFns: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
    format: 'MM/dd/yyyy'
  },

  generate: {
    fallback: '404.html'
  },

  gtm: {
    id: 'GTM-WS2RFK9'
  },

  purgeCSS: {
    whitelistPatterns: [/^hljs/, /^page-/]
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://shipshape.io',
    cacheTime: 1000 * 60 * 15,
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
