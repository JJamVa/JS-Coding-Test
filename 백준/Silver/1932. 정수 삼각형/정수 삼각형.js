const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let depth = input.shift();
let array = Array.from({ length: depth }, () =>
  input.shift().split(" ").map(Number)
);

for(let i = depth - 2; i !== -1; i--){
  for(let j = 1; j < array[i + 1].length; j++){
    array[i][j - 1] += Math.max(array[i + 1][j - 1], array[i + 1][j]);
  }
}

console.log(array[0][0]);