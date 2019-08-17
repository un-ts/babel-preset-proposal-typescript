const config = require('@1stg/prettier-config')

module.exports = Object.assign({}, config, {
  overrides: config.overrides.concat({
    files: '*.ts',
    options: {
      parser: 'babel',
    },
  }),
})
