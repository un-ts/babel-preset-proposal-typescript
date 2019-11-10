const {
  config,
  jest,
  js,
  test,
  ts,
  mdx,
} = require('@1stg/eslint-config/overrides')

const tsBase = ts[0]

module.exports = {
  extends: ['@1stg/eslint-config/base', 'plugin:import/typescript'],
  parser: 'babel-eslint',
  settings: {
    'import/ignore': [/test\/private-methods.ts$/],
    'import/parsers': {
      '@typescript-eslint/parser': [],
      'babel-eslint': ['.ts'],
    },
    ...tsBase.settings,
  },
  overrides: [
    tsBase,
    {
      files: '.*rc.js',
      rules: {
        'node/no-extraneous-require': 0,
      },
    },
    {
      ...js,
      files: 'test/*.{js,ts}',
    },
    jest,
    mdx,
    test,
    config,
  ],
}
