import _ from './unicode-property-regex'

import { babelExecute, execute } from './helpers'

const proposal = 'unicode-property-regex'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_('π')).toBe(true)
  expect(_()).toBe(false)
})
