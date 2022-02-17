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
    extend: {
      colors: {
        'acquia-blue': 'var(--acquia)',
        black: 'var(--black)',
        'blue-light': 'var(--blue-light)',
        'expel-green': 'var(--expel)',
        navy: 'var(--navy)',
        'navy-card-dark': '#133254',
        'navy-card-light': '#1B3B5E',
        'navy-light': '#073256',
        'netflix-red': '#E50914',
        'enigma-blue': '#1B1D36',
        grey: 'var(--grey)',
        'grey-light': 'var(--grey-light)',
        'jebbit-green': 'var(--jebbit)',
        red: 'var(--red)',
        'red-light': 'var(--red-light)',
        'swach-purple': 'var(--swach)',
        white: 'var(--white)'
      },
      fill: (theme) => ({
        navy: theme('colors.navy'),
        red: theme('colors.red'),
        white: theme('colors.white')
      }),
      height: {
        case: '113.5%'
      },
      inset: {
        '1/2': '50%'
      },
      maxWidth: {
        xxs: '13rem',
        '8xl': '90rem',
        '9xl': '100rem'
      },
      minHeight: {
        24: '6rem',
        80: '20rem'
      },
      spacing: {
        88: '22rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        140: '36rem'
      },
      stroke: (theme) => ({
        white: theme('colors.white')
      })
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
