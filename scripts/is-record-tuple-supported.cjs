const [major, minor] = process.versions.node.split('.')

// eslint-disable-next-line no-magic-numbers
module.exports = () => +major > 14 || (+major === 14 && +minor >= 6)
