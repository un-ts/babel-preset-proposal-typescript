import base from '@1stg/nano-staged'

export default {
  ...base,
  // the test fixtures intentionally use syntax TypeScript cannot parse,
  // so only `src` is type-checked here
  '*.ts?(x)': () => 'tsc -p src --noEmit',
}
