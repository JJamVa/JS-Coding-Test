const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let [start, end] = input.shift().split(" ").map(Number);
let visited = Array(100001).fill(false);
visited[start] = true;
let queue = [start];
let increase = [-1, 1, 2];
let time = 0;

while (!visited[end]) {
  time++;
  let location = [];
  for (let idx = 0; idx < queue.length; idx++) {
    for (let i = 0; i < increase.length; i++) {
      let data = queue[idx];
      if (increase[i] === 2) {
        data *= 2;
      } else {
        data += increase[i];
      }

      if (data <= 100001 && data >= 0 && visited[data] === false) {
        visited[data] = true;
        location.push(data);
      }

      if (visited[end]) break;
    }
  }
  queue = [...location];
}
console.log(time);