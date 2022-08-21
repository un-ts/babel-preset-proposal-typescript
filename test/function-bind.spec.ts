import _ from './function-bind.js'
import { execute } from './helpers.js'

const proposal = 'function-bind'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_()).toEqual([2, 10, 15])
})
