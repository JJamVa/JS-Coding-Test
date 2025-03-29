const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let value = parseInt(input.shift());
let step_score = [];

while (input.length !== 0) {
  step_score.push(parseInt(input.shift()));
}

let dp = Array.from({ length: value + 1 }, () =>
  Array.from({ length: 3 }).fill(0)
);

dp[1][1] = step_score[0];
if (value > 1) {
  dp[2][1] = step_score[1];
  dp[2][2] = dp[1][1] + step_score[1];
}

for (let i = 3; i <= value; i++) {
  dp[i][1] = Math.max(
    dp[i - 2][2] + step_score[i - 1],
    dp[i - 2][1] + step_score[i - 1]
  );
  dp[i][2] = dp[i - 1][1] + step_score[i - 1];
}

console.log(Math.max(...dp[value]));