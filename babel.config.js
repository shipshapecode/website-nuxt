// This file is just for Jest. The app babel config is in nuxt.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};
