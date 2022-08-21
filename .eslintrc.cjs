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
  extends: ['@1stg/eslint-config/base'],
  overrides: [
    ts[0],
    {
      ...js,
      files: 'test/*.{js,ts}',
      rules: js.rules,
    },
    jest,
    json,
    jsonc,
    md,
    mdx,
    test,
    configs,
    yml,
  ],
}
