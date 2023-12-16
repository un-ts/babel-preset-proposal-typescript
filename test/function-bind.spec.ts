import _ from './function-bind.js'
import { execute } from './helpers.js'

const proposal = 'function-bind'

test(proposal, () => {
  // Cannot read property 'weight' of undefined
  // vs.
  // Cannot read properties of undefined (reading 'weight')
  expect(() => execute(proposal)).toThrow(/^Cannot read propert(y|ies) /)
  expect(_()).toEqual([2, 10, 15])
})
