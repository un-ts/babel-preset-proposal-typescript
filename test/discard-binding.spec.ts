import _ from './discard-binding.js'
import { execute } from './helpers.js'

const proposal = 'discard-binding'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_).toBe(2)
})
