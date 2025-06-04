const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [N, M] = input.shift().split(" ").map(Number);
  const numbers = input.shift().split(" ").map(Number);

  const prefix = [0];
  for (let i = 0; i < N; i++) {
    prefix.push(prefix[i] + numbers[i]);
  }

  const result = [];

  for (let i = 0; i < M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    result.push(prefix[b] - prefix[a - 1]);
  }

  console.log(result.join("\n"));
});