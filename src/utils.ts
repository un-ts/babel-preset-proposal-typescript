const [major, minor] = process.versions.node.split('.')

export const IS_RECORD_TUPLE_SUPPORTED =
  // eslint-disable-next-line no-magic-numbers
  +major > 14 || (+major === 14 && +minor >= 6)
