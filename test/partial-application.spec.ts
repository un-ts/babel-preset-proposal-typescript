import _ from './partial-application'
import { execute } from './helpers'

const proposal = 'partial-application'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_()).toEqual([3, 12])
})
