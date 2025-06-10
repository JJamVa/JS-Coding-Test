const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let depth = parseInt(input.shift());
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let array = [];
let queue = [];

let idx = 0;
while (input.length !== 0) {
  let data = input.shift().split("").map(Number);
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 1) {
      queue.push([idx, i]);
    }
  }
  array.push([...data]);
  idx++;
}

let count_arr = [];

while (queue.length !== 0) {
  let [x, y] = queue.shift();
  let ground_queue = [];
  if (array[x][y] === 0) continue;
  array[x][y] = 0;
  let ground_count = 1;
  ground_queue.push([x, y]);

  while (ground_queue.length !== 0) {
    let [nx, ny] = ground_queue.shift();
    for (let i = 0; i < dx.length; i++) {
      let dot_x = nx + dx[i];
      let dot_y = ny + dy[i];

      if (dot_x < 0 || dot_x >= depth || dot_y < 0 || dot_y >= depth) continue;
      if (array[dot_x][dot_y] === 0) continue;
      array[dot_x][dot_y] = 0;
      ground_count++;
      ground_queue.push([dot_x, dot_y]);
    }
  }
  count_arr.push(ground_count);
}

console.log(
  count_arr.length + "\n" + count_arr.sort((a, b) => a - b).join("\n")
);