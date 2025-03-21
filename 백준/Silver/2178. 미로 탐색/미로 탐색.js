const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let [height, width] = input.shift().split(" ").map(Number);
let array = input.map((line) => line.split("").map(Number));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let queue = [[0, 0]];

while (queue.length > 0) {
  let [queue_x, queue_y] = queue.shift();

  for (let i = 0; i < dx.length; i++) {
    let dot_x = queue_x + dx[i];
    let dot_y = queue_y + dy[i];

    if (dot_x < 0 || dot_x >= height || dot_y < 0 || dot_y >= width) continue;
    if (array[dot_x][dot_y] !== 1) continue;
    array[dot_x][dot_y] += array[queue_x][queue_y];
    queue.push([dot_x, dot_y]);
  }
}

console.log(array[height - 1][width - 1]);
