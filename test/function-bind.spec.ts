import _ from './function-bind'
import { execute } from './helpers'

const proposal = 'function-bind'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_()).toEqual([2, 10, 15])
})
