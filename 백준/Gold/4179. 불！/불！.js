const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let [height, width] = input.shift().split(" ").map(Number);
let human_queue = [];
let fire_queue = [];
let array = [];
let [dx, dy] = [
  [1, 0, -1, 0],
  [0, 1, 0, -1],
];
let time = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "J") human_queue.push([i, j]);
    if (input[i][j] === "F") fire_queue.push([i, j]);
  }
  array.push(input[i].split(""));
}

while (human_queue.length !== 0) {
  let fire_location = [];
  for (let idx = 0; idx < fire_queue.length; idx++) {
    let [fire_x, fire_y] = [fire_queue[idx][0], fire_queue[idx][1]];
    for (let i = 0; i < dx.length; i++) {
      let [x, y] = [fire_x + dx[i], fire_y + dy[i]];
      if (x >= height || x < 0 || y >= width || y < 0) continue;
      if (array[x][y] === "#" || array[x][y] === "F") continue;
      array[x][y] = "F";
      fire_location.push([x, y]);
    }
  }

  fire_queue = [...fire_location];

  let human_location = [];
  for (let i = 0; i < human_queue.length; i++) {
    let current_human = human_queue[i];
    for (let i = 0; i < dx.length; i++) {
      let [human_x, human_y] = [
        current_human[0] + dx[i],
        current_human[1] + dy[i],
      ];
      if (human_x >= height || human_x < 0 || human_y >= width || human_y < 0) {
        console.log(time + 1);
        return;
      }
      if (array[human_x][human_y] === "#" || array[human_x][human_y] === "F")
        continue;
      if (array[human_x][human_y] === ".") {
        array[human_x][human_y] = "J";
        human_location.push([human_x, human_y]);
      }
    }
  }

  time++;
  human_queue = [...human_location];

  if (human_queue.length === 0) {
    console.log("IMPOSSIBLE");
    return;
  }
}

console.log(time);