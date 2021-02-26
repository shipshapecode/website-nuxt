import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { extname, resolve } from 'path';
import walkSync from 'walk-sync';
import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';
const converter = new showdown.Converter({
  extensions: [showdownHighlight]
});
const yamlFront = require('yaml-front-matter');

const isProd = process.env.NODE_ENV === 'production';

const blogPosts = readdirSync('blog/posts/');

const _getBlogPosts = () => {
  const fileNames = blogPosts.map((post) => {
    return post.slice(0, -3);
  });

  const slugs = blogPosts.map((post) => {
    return post.slice(11, -3);
  });

  writeFileSync(
    resolve(__dirname, 'posts.json'),
    JSON.stringify(fileNames, null, 2)
  );

  return slugs.map((slug) => `/blog/${slug}`);
};

function _getAuthorURLs() {
  return walkSync('blog/authors')
    .map((file) => file.replace(/\.md$/, ''))
    .map((id) => `/blog/authors/${id}`);
}

function _getCategoryURLs() {
  const paths = walkSync('blog/posts');
  const postPaths = paths.filter((path) => extname(path) === '.md');
  const postsFrontmatter = postPaths.map((path) => {
    return yamlFront.loadFront(readFileSync(`blog/posts/${path}`));
  });

  let categories = postsFrontmatter
    .map((post) => post.categories)
    .reduce((a, b) => a.concat(b), [])
    .filter((x) => !!x)
    .map((category) => category.replace(' ', '-'));

  // Get only unique categories
  categories = [...new Set(categories)];

  return categories.map((category) => `/blog/categories/${category}`);
}

const authorRoutes = _getAuthorURLs();
const blogPostRoutes = _getBlogPosts();
const categoryRoutes = _getCategoryURLs();
const blogRoutes = [...authorRoutes, ...categoryRoutes, ...blogPostRoutes];

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
    '@nuxtjs/sitemap'
  ],

  optimizedImages: {
    optimizeImages: true
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
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

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: resolve(__dirname, 'blog'),
        options: {
          markdown(body) {
            return converter.makeHtml(body);
          }
        }
      });
    }
  },

  dateFns: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
    format: 'MM/dd/yyyy'
  },

  generate: {
    fallback: '404.html',
    routes: [].concat(blogRoutes)
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
    routes: [].concat(blogRoutes),
    filter({ routes }) {
      return routes.map((route) => {
        route.url = `${route.url}/`;
        return route;
      });
    }
  }
};