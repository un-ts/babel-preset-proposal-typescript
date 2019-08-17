import _ from './do-expressions'
import { execute } from './helpers'

const proposal = 'do-expressions'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_(20)).toBe('big')
  expect(_(0)).toBe('small')
})
