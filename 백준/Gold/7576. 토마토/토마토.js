const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let [height, width] = input.shift().split(" ").map(Number);
let array = input.map((e) => e.split(" ").map(Number));
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let queue = [];
let result = 0;
let [totalTomato, changeTomato] = [0, 0];

for (let i = 0; i < width; i++) {
  for (let j = 0; j < height; j++) {
    if (array[i][j] === 1) {
      queue.push([i, j]);
      totalTomato++;
    }
    if (array[i][j] !== -1) changeTomato++;
  }
}

while (queue.length !== 0) {
  let data = [];

  for(let i = 0; i < queue.length; i++){
    let [queue_x, queue_y] = queue[i];
    for (let i = 0; i < dx.length; i++) {
      let dot_x = queue_x + dx[i];
      let dot_y = queue_y + dy[i];
      if (dot_x < 0 || dot_x >= width || dot_y < 0 || dot_y >= height) continue;
      if (array[dot_x][dot_y] !== 0) continue;
      array[dot_x][dot_y] = 1;
      data.push([dot_x, dot_y]);
      totalTomato++;
    }
  }
  queue = data;
  if (queue.length > 0) result++;
}

console.log(totalTomato === changeTomato ? result : -1);
