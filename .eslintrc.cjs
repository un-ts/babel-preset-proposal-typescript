const {
  configs,
  jest,
  js,
  json,
  jsonc,
  test,
  ts,
  md,
  mdx,
  yml,
} = require('@1stg/eslint-config/overrides')

module.exports = {
  root: true,
  extends: ['@1stg/eslint-config/base'],
  overrides: [
    ts[0],
    jest,
    json,
    jsonc,
    md,
    mdx,
    test,
    configs,
    yml,
    {
      ...js,
      files: 'test/*.{cjs,cts,js,ts}',
      rules: {
        ...js.rules,
        'no-magic-numbers': 'off',
        'jest/valid-title': 'off',
      },
    },
    {
      files: [
        'test/duplicate-named-capturing-groups-regex.ts',
        'test/regexp-modifiers.ts',
      ],
      rules: {
        'regexp/no-invalid-regexp': 'off',
        'unicorn/better-regex': 'off',
      },
    },
  ],
}
