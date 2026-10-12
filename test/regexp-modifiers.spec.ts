import { execute } from './helpers.js'
import _ from './regexp-modifiers.js'

const proposal = 'regexp-modifiers'

const supportsRegexpModifiers = (() => {
  const pattern = '(?i:a)'
  try {
    new RegExp(pattern)
    return true
  } catch {
    return false
  }
})()

test(proposal, () => {
  // TypeScript does not transform regular expressions, the runtime support
  // of RegExp modifiers depends on the V8 version
  if (supportsRegexpModifiers) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(execute(proposal, 'Aa')).toBe(true)
  } else {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(() => execute(proposal, 'Aa')).toThrow(/Invalid group/)
  }
  expect(_('Aa')).toEqual(true)
  expect(_('Ba')).toEqual(false)
})
