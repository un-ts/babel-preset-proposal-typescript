import _ from './function-sent'

import { execute } from './helpers'

const proposal = 'function-sent'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_(.3, .4, .5)).toBe(2.2)
})
