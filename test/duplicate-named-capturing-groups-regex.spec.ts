import _ from './duplicate-named-capturing-groups-regex.js'
import { execute } from './helpers.js'

const proposal = 'duplicate-named-capturing-groups-regex'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_('02-1999')).toMatchInlineSnapshot(`"1999"`)
})
