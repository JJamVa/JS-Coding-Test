const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let count = parseInt(input.shift());
let array = Array.from({ length: count + 1 }).fill(0);
array[1] = 1;
array[2] = 2;

for (let i = 3; i <= count; i++) {
  array[i] = array[i - 1] % 10007 + array[i - 2] % 10007;
}

console.log(array[count] % 10007);