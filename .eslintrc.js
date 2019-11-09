const { jest, js, test, ts, mdx } = require('@1stg/eslint-config/overrides')

module.exports = {
  extends: ['@1stg/eslint-config/base', 'plugin:import/typescript'],
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
      files: '.*rc.js',
      rules: {
        'node/no-extraneous-require': 0,
      },
    },
    {
      ...js,
      files: '*.{js,ts}',
    },
    jest,
    mdx,
    test,
  ],
}
