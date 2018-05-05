export function random(array) {
  const random = Math.floor(Math.random() * (array.length - 1));

  return array[random];
}
