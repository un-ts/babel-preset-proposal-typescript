import { createRequire } from 'node:module'

import { execute } from './helpers.js'
import * as _ from './import-defer.cjs'

const cjsRequire = createRequire(import.meta.url)

const pkg = cjsRequire('@babel/core/package.json') as {
  version: string
}

const [major, minor] = process.versions.node.split('.').map(Number)

// Jest only supports `require(esm)` natively since Node.js v24.9
const supportsRequireEsm = major > 24 || (major === 24 && minor >= 9)

const proposal = 'import-defer'

test(proposal, () => {
  expect(() => execute(proposal + '.cts')).toThrowErrorMatchingSnapshot()
  if (supportsRequireEsm) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(_.getVersion()).toBe(pkg.version)
  } else {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(() => _.getVersion()).toThrow(/Must use import to load ES Module/)
  }
})
