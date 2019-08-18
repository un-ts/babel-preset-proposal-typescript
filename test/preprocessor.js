const ts = require('typescript')

const babel = require('@babel/core')

module.exports = {
  process(src, path) {
    return path.endsWith('.ts')
      ? ts.transpile(
          babel.transform(src, {
            presets: ['proposal-typescript'],
            filename: path,
          }).code,
          null,
          path,
        )
      : src
  },
}
