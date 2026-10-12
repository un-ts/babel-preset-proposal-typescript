import type { PluginAPI } from '@babel/core'
import { declare } from '@babel/helper-plugin-utils'

export default declare((api: PluginAPI) => {
  api.assertVersion('^8.0.0')
  return {
    name: 'v8intrinsic',
    manipulateOptions(_opts, parserOpts) {
      parserOpts.plugins.push('v8intrinsic')
    },
  }
})
