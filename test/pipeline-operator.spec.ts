import _ from './pipeline-operator'
import { execute } from './helpers'

const proposal = 'pipeline-operator'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_('hello', 25)).toEqual(['Hello, hello!', 57])
})
