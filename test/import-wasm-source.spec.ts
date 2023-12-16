import { execute } from './helpers.js'
import _ from './import-wasm-source.js'

const proposal = 'import-wasm-source'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_()).toBeDefined()
})
