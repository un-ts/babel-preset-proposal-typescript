function doubleSay(str) {
  return str + ', ' + str
}

function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1)
}

function exclaim(str) {
  return str + '!'
}

function double (x) { return x + x; }
function add (x, y) { return x + y; }

function boundScore (min, max, score) {
  return Math.max(min, Math.min(max, score));
}

export default (word: string, score: number) => {
  return [
    word
    |> doubleSay
    |> capitalize
    |> exclaim,

    score
    |> double
    |> (_ => add(7, _))
    |> (_ => boundScore(0, 100, _))]
}
