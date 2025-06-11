const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let number = parseInt(input.shift());
let dp = Array.from({ length: number + 1 }).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 3;

for (let i = 2; i <= number; i++) {
  dp[i] = (2 * dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[number]);