import compareVersions from 'compare-versions'

export const NODE_VERSION = process.versions.node

export const IS_RECORD_TUPLE_SUPPORTED = compareVersions.compare(
  NODE_VERSION,
  '14.6',
  '>=',
)
