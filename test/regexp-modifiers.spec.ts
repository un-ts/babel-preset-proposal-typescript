import { execute } from './helpers.js'
import _ from './regexp-modifiers.js'

const proposal = 'regexp-modifiers'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_('Aa')).toEqual(true)
  expect(_('Ba')).toEqual(false)
})
