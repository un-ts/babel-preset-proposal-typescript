import { execute } from './helpers.js'
import _ from './pipeline-operator.js'

const proposal = 'pipeline-operator'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_('hello', 25)).toEqual(['Hello, hello!', 57])
})
