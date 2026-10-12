import { execute } from './helpers.js'
import _ from './regexp-modifiers.js'

const proposal = 'regexp-modifiers'

test(proposal, () => {
  // TypeScript does not transform regular expressions, while the current
  // runtime already supports RegExp modifiers natively
  expect(execute(proposal, 'Aa')).toEqual(true)
  expect(_('Aa')).toEqual(true)
  expect(_('Ba')).toEqual(false)
})
