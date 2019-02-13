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

    'vue/html-closing-bracket-spacing': 'off'
  }
}
