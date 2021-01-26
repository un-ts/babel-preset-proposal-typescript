export class Foo {
  test(obj: unknown) {
    return #bar in obj
  }

  #bar = 'bar'
}
