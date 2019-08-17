const babel = require('@babel/core')
const ts = require('typescript')

module.exports = {
  process(src, path) {
    return path.endsWith('.ts')
      ? ts.transpile(
          babel.transform(src, {
            presets: ['proposal-typescript'],
          }).code,
          null,
          path,
        )
      : src
  },
}
