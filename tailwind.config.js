const gradient = require('./assets/css/tailwind/plugins/gradient');

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',

      'acquia-blue': '#31A9E1',
      black: '#000000',
      navy: '#00213B',
      'netflix-red': '#E50914',
      gold: '#BBA46F',
      grey: '#5F6976',
      'grey-light': '#909BA0',
      'grey-transparent': 'rgba(236, 243, 246, 50)',
      'jebbit-green': '#7ec0b2',
      red: '#EF898B',
      white: '#FFFFFF'
    },

    height: {
      auto: 'auto',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '140': '36rem',
      full: '100%',
      screen: '100vh'
    },

    maxWidth: {
      xxs: '13rem',
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      full: '100%'
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },

    textSizes: {
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem' // 48px
    }
  },
  variants: {},
  plugins: [
    gradient({
      gradients: {
        'brokermate': ['#3FB7E6', '#782599']
      }
    })
  ],
  corePlugins: {
    container: false
  }
};
