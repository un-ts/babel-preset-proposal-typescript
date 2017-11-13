import _ from './numeric-separator'

import { execute } from './helpers'

const proposal = 'numeric-separator'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_()).toEqual([10 ** 12, true, 'a0', 160, 'b0', 176, 'c0', 192])
})
