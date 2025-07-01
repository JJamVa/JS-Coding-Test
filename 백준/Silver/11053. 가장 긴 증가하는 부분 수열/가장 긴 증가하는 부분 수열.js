const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let count = parseInt(input.shift());
let array = input.shift().split(" ").map(Number);
let dp = Array.from({ length: count }, () => 1);

for (let i = 1; i < count; i++) {
  for (let j = 0; j < i; j++) {
    if (array[j] < array[i] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
    }
  }
}

console.log(Math.max(...dp));
