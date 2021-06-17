const {
  configs,
  jest,
  js,
  test,
  ts,
  md,
  mdx,
} = require('@1stg/eslint-config/overrides')

const tsBase = ts[0]

module.exports = {
  extends: ['@1stg/eslint-config/base'],
  overrides: [
    tsBase,
    {
      ...js,
      files: 'test/*.{js,ts}',
      rules: js.rules,
    },
    jest,
    md,
    mdx,
    test,
    configs,
  ],
}
