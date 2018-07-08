var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destuctivelyPrependKitten(name) {
  return kittens.unshift(name);
}
