import { ConfigAPI, TransformOptions } from '@babel/core'
import { declare } from '@babel/helper-plugin-utils'

export default declare((api: ConfigAPI) => {
  api.assertVersion(7)
  return {
    name: 'v8intrinsic',
    manipulateOptions(_opts: {}, parserOpts: TransformOptions) {
      parserOpts.plugins!.push('v8intrinsic')
    },
  }
})
