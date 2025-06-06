const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let count = parseInt(input.shift());
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

while (count !== 0) {
  let result = 0;
  let [M, N, K] = input.shift().split(" ").map(Number);
  let data = [];
  let array = Array.from({ length: M }, () =>
    Array.from({ length: N }).fill(null)
  );

  while (K !== 0) {
    let [x, y] = input.shift().split(" ").map(Number);
    array[x][y] = 1;
    data.push([x, y]);
    K--;
  }

  while (data.length !== 0) {
    let queue = [data.shift()];
    if (array[queue[0][0]][queue[0][1]] === 0) continue;

    while (queue.length !== 0) {
      let [x, y] = queue.shift();
      for (let i = 0; i < dx.length; i++) {
        let dot_x = x + dx[i];
        let dot_y = y + dy[i];
        if (dot_x < 0 || dot_x >= M || dot_y < 0 || dot_y >= N) continue;
        if (array[dot_x][dot_y] === null || array[dot_x][dot_y] === 0) continue;
        array[dot_x][dot_y] = 0;
        queue.push([dot_x, dot_y]);
      }
    }

    result++;
  }
  console.log(result);
  count--;
}