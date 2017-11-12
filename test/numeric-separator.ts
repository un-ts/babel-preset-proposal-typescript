export default () => {
  let budget = 1_000_000_000_000
  let nibbles = 0b1010_0001_1000_0101
  let message = 0xA0_B0_C0
  let a = (message >> 16) & 0xFF
  let b = (message >> 8) & 0xFF
  let c = message & 0xFF

  return [budget, !!(nibbles & (1 << 7)), a.toString(16), a, b.toString(16), b, c.toString(16), c]
}
