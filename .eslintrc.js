const { resolve } = require('path')
const { jest, js } = require('@1stg/eslint-config/overrides')

module.exports = {
  extends: ['@1stg', 'plugin:import/typescript'],
  parser: 'babel-eslint',
  parserOptions: {
    babelOptions: {
      configFile: resolve('babel.js'),
    },
  },
  settings: {
    'import/parsers': {
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
