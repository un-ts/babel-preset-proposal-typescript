import { execute } from './helpers.js'
import _ from './throw-expressions.js'

const proposal = 'throw-expressions'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(() => _()).toThrow('Argument required')
  expect(_(proposal)).toBe(proposal)
})
