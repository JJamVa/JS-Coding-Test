const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let value = input.shift();
let array = Array.from({ length: parseInt(value) + 1 }).fill(0);
array[1] = 0;

for (let i = 2; i < array.length; i++) {
  array[i] = array[i - 1] + 1;
  if (i % 2 === 0) array[i] = Math.min(array[i], array[i / 2] + 1);
  if (i % 3 === 0) array[i] = Math.min(array[i], array[i / 3] + 1);
}

console.log(array[parseInt(value)]);