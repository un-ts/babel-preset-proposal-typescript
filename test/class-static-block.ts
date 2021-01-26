const doSomethingWith = (value: number) =>
  /* istanbul ignore next */
  value >= 80 ? 'good' : value >= 60 ? 'ok' : 'bad'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class C {
  static #x = 42
  // eslint-disable-next-line @typescript-eslint/member-ordering
  static y: string
  static {
    try {
      // eslint-disable-next-line @babel/no-invalid-this
      this.y = doSomethingWith(this.#x)
    } catch {
      /* istanbul ignore next */
      // eslint-disable-next-line @babel/no-invalid-this
      this.y = 'unknown'
    }
  }
}
