import _ from './do-expressions.js'
import { execute } from './helpers.js'

const proposal = 'do-expressions'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_(20)).toBe('big')
  expect(_(0)).toBe('small')
})
