const { resolve } = require('path')
const { jest, js, ts, md } = require('@1stg/eslint-config/overrides')
const { merge } = require('lodash')

module.exports = {
  extends: ['@1stg', 'plugin:import/typescript'],
  parser: 'babel-eslint',
  settings: {
    'import/ignore': [/test\/private-methods.ts$/],
    'import/parsers': {
      '@typescript-eslint/parser': [],
      'babel-eslint': ['.ts'],
    },
    ...ts.settings,
  },
  overrides: [
    {
      ...js,
      files: '*.{js,ts}',
    },
    jest,
    md,
  ],
}
