const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let value = input.shift();
let array = [];

while (input.length !== 0) {
  array.push(parseInt(input.shift()));
}

let dp = Array.from({ length: Math.max(...array) + 1 }).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < dp.length; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let i = 0; i < value; i++) {
  console.log(dp[array[i]]);
}
