import { declare } from '@babel/helper-plugin-utils'

export default declare((api, options) => {
  api.assertVersion(7)
  return {
    name: 'v8intrinsic',
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push('v8intrinsic')
    },
  }
})
