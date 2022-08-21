import { execute } from './helpers.js'
import _ from './json-strings.js'

const proposal = 'json-strings'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_()).toBe('before\u2028after')
})
