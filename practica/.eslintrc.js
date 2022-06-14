module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    eqeqeq: 'error',
    semi: ['off', 'never'],
    indent: ['warn', 2],
  },
}
