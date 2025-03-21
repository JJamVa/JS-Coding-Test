const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().replace(/\r/g, "").split("\n");

let [a, b] = input.shift().split(" ").map(Number);
let array = input.map(line => line.split(" ").map(Number));

let height = array.length;
let width = array[0].length;

let visited = Array.from({length: height}, () => Array.from({length: width}, () => false));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let size_array = [];
let num = 0;

for(let i = 0; i < height; i++) {
    for(let j = 0; j < width; j++) {
        if (array[i][j] === 0 || visited[i][j]) continue;
        
        num++;
        visited[i][j] = true;
        
        let queue = [[i, j]];
        let size = 0;

        while(queue.length > 0) {
            size++;
            let [queue_x, queue_y] = queue.shift();
            
            for (let k = 0; k < 4; k++) {
                let nx = queue_x + dx[k];
                let ny = queue_y + dy[k];

                if (nx < 0 || nx >= height || ny < 0 || ny >= width) continue;
                if (visited[nx][ny] || array[nx][ny] !== 1) continue;

                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
        size_array.push(size);
    }
}

console.log(num, size_array.length > 0 ? Math.max(...size_array) : 0);