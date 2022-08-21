import { execute } from './helpers.js'
import _ from './partial-application.js'

const proposal = 'partial-application'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_()).toEqual([3, 12])
})
