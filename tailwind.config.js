const gradient = require('./assets/css/tailwind/plugins/gradient');

module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    colors: {
      transparent: 'transparent',

      'acquia-blue': '#31A9E1',
      black: '#000000',
      'expel-green': '#07a75c',
      navy: '#00213B',
      'navy-card-dark': '#133254',
      'navy-card-light': '#1B3B5E',
      'navy-light': '#073256',
      'netflix-red': '#E50914',
      gold: '#BBA46F',
      grey: '#5F6976',
      'grey-light': '#909BA0',
      'grey-transparent': 'rgba(236, 243, 246, 50)',
      'jebbit-green': '#7ec0b2',
      red: '#EF898B',
      'swach-purple': '#0A0038',
      white: '#FFFFFF'
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },

    fill: (theme) => ({
      white: theme('colors.white')
    }),

    stroke: (theme) => ({
      white: theme('colors.white')
    }),

    maxWidth: {
      xxs: '13rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '90rem',
      '9xl': '100rem',
      full: '100%'
    },

    minHeight: {
      0: '0',
      24: '6rem',
      80: '20rem',
      full: '100%',
      screen: '100vh'
    },

    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      88: '22rem',
      96: '24rem',
      104: '26rem',
      112: '28rem',
      120: '30rem',
      140: '36rem'
    },

    extend: {
      inset: {
        '1/2': '50%'
      }
    }
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      fontWeight: ['hover', 'focus'],
      opacity: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    gradient({
      gradients: {
        brokermate: ['#3FB7E6', '#782599']
      }
    })
  ],
  corePlugins: {
    container: false
  }
};
