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
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    indent: 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': 'off',

    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-self-closing': 'off'
  }
};
