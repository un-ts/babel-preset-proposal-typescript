function doubleSay(str: string) {
  return str + ', ' + str
}

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1)
}

function exclaim(str: string) {
  return str + '!'
}

function double(x: number) {
  return x + x
}
function add(x: number, y: number) {
  return x + y
}

function boundScore(min: number, max: number, score: number) {
  return Math.max(min, Math.min(max, score))
}

export default (word: string, score: number) => {
  return [
    word |> doubleSay |> capitalize |> exclaim,

    score |> double |> (_ => add(7, _)) |> (_ => boundScore(0, 100, _)),
  ]
}
