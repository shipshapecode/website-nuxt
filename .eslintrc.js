module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    indent: 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': 'off',

    'vue/html-closing-bracket-spacing': 'off'
  }
};
