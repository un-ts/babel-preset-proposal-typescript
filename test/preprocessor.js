const babel = require('@babel/core')
const ts = require('typescript')

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts')) {
      return ts.transpile(babel.transform(src).code, null, path, [])
    }
    return src
  },
}
