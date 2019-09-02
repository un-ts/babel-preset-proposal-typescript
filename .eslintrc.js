const { resolve } = require('path')
const { jest, js } = require('@1stg/eslint-config/overrides')

module.exports = {
  extends: ['@1stg', 'plugin:import/typescript'],
  parser: 'babel-eslint',
  parserOptions: {
    babelOptions: {
      configFile: resolve('.babelrc.js'),
    },
  },
  settings: {
    'import/ignore': [/test\/private-methods.ts$/],
    'import/parsers': {
      '@typescript-eslint/parser': [],
      'babel-eslint': ['.ts'],
    },
    'import/resolver': {
      typescript: true,
    },
  },
  overrides: [
    {
      files: '*.{js,ts}',
      ...js,
    },
    jest,
  ],
}
