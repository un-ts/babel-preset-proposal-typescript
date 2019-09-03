const { resolve } = require('path')
const { dTs, jest, js, ts } = require('@1stg/eslint-config/overrides')
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
    'import/resolver': {
      typescript: true,
    },
  },
  overrides: [
    {
      ...js,
      files: '*.{js,ts}',
    },
    merge({}, ts, dTs, {
      files: '*.d.ts',
      rules: {
        'prettier/prettier': [
          2,
          {
            parser: 'typescript',
          },
        ],
      },
    }),
    jest,
  ],
}
