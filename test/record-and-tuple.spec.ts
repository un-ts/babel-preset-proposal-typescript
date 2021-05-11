import _ from './record-and-tuple'
import { execute } from './helpers'

const proposal = 'record-and-tuple'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_).toEqual(['Record & Tuple proposal', 'tc39'])
})
