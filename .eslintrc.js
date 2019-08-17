const { resolve } = require('path')
const { jest, js } = require('@1stg/eslint-config/overrides')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    babelOptions: {
      configFile: resolve('babel.js'),
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
