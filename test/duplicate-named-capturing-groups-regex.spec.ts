import _ from './duplicate-named-capturing-groups-regex.js'
import { execute } from './helpers.js'

const proposal = 'duplicate-named-capturing-groups-regex'

const supportsDuplicateNamedGroups = (() => {
  const pattern = String.raw`(?<year>\d{4})|(?<year>\d{2})`
  try {
    new RegExp(pattern)
    return true
  } catch {
    return false
  }
})()

test(proposal, () => {
  // TypeScript does not transform regular expressions, the runtime support
  // of duplicate named capturing groups depends on the V8 version
  if (supportsDuplicateNamedGroups) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(execute(proposal, '02-1999')).toBe('1999')
  } else {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(() => execute(proposal, '02-1999')).toThrow(
      /Duplicate capture group name/,
    )
  }
  expect(_('02-1999')).toMatchInlineSnapshot(`"1999"`)
})
