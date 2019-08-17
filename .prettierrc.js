const config = require('@1stg/prettier-config')

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: '*.ts',
      options: {
        parser: 'babel',
      },
    },
  ],
}
