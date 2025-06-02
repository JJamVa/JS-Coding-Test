const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let count = parseInt(input.shift());
let array = input.map((e) => e.split(" ").map(Number));

for(let i = 1; i < count; i++){
  array[i][0] += Math.min(array[i - 1][1], array[i - 1][2]);
  array[i][1] += Math.min(array[i - 1][0], array[i - 1][2]);
  array[i][2] += Math.min(array[i - 1][0], array[i - 1][1]);
}

console.log(Math.min(...array[count - 1]));