const config = require('@1stg/prettier-config')

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: 'test/*.ts',
      options: {
        parser: 'babel',
      },
    },
  ],
}
