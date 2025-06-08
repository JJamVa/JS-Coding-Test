const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let count = parseInt(input.shift());
let array = input.shift().split(" ").map(Number);
let dp = Array.from({ length: array.length }, () => 0);
dp[0] = array[0];
let max = dp[0];

for (let i = 1; i < count; i++) {
  dp[i] = Math.max(array[i], dp[i - 1] + array[i]);
  max = Math.max(max, dp[i]);
}

console.log(max);