export function random(array) {
  const random = Math.floor(Math.random() * (array.length));

  return array[random];
}
