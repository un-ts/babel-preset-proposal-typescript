import { createRequire } from 'node:module'

import { execute } from './helpers.js'
import * as _ from './import-defer.cjs'

const cjsRequire = createRequire(import.meta.url)

const pkg = cjsRequire('@babel/core/package.json') as {
  version: string
}

const proposal = 'import-defer'

test(proposal, () => {
  expect(() => execute(proposal + '.cts')).toThrowErrorMatchingSnapshot()
  expect(_.getVersion()).toBe(pkg.version)
})
