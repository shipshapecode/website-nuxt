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
