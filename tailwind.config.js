module.exports = {
  mode: 'jit',
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js'
  ],
  theme: {
    colors: {
      transparent: 'var(--transparent)',

      'acquia-blue': 'var(--acquia)',
      black: 'var(--black)',
      'blue-light': 'var(--blue-light)',
      'expel-green': 'var(--expel)',
      navy: 'var(--navy)',
      'navy-card-dark': '#133254',
      'navy-card-light': '#1B3B5E',
      'navy-light': '#073256',
      'netflix-red': '#E50914',
      grey: 'var(--grey)',
      'grey-light': 'var(--grey-light)',
      'jebbit-green': 'var(--jebbit)',
      red: 'var(--red)',
      'red-light': 'var(--red-light)',
      'swach-purple': 'var(--swach)',
      white: 'var(--white)'
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
      navy: theme('colors.navy'),
      red: theme('colors.red'),
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
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
  corePlugins: {
    container: false
  }
};
