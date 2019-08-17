import _ from './throw-expressions'
import { execute } from './helpers'

const proposal = 'throw-expressions'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(() => _()).toThrow('Argument required')
  expect(_(proposal)).toBe(proposal)
})
