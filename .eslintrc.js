const {
  config,
  jest,
  js,
  test,
  ts,
  mdx,
} = require('@1stg/eslint-config/overrides')

const tsBase = ts[0]

js.parser = '@babel/eslint-parser'
js.plugins = ['@babel']
const jsRules = js.rules

delete jsRules['babel/camelcase']
delete jsRules['babel/new-cap']
delete jsRules['babel/no-invalid-this']
delete jsRules['babel/no-unused-expressions']
delete jsRules['babel/valid-typeof']

module.exports = {
  extends: ['@1stg/eslint-config/base', 'plugin:import/typescript'],
  settings: {
    'import/ignore': [/test\/private-methods.ts$/],
    'import/parsers': {
      '@typescript-eslint/parser': [],
      '@babel/eslint-parser': ['.ts'],
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
      plugins: ['@babel'],
      files: 'test/*.{js,ts}',
      rules: {
        ...jsRules,
        '@babel/new-cap': 2,
        '@babel/no-invalid-this': 2,
        '@babel/no-unused-expressions': 2,
      },
    },
    jest,
    mdx,
    test,
    config,
  ],
}
