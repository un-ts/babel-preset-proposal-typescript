import _ from './json-strings'

import { execute } from './helpers'

const proposal = 'logical-assignment-operators'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_).toBe('before\u2028after')
})
