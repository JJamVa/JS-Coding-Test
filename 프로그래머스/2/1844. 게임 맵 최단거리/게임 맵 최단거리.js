function solution(maps) {
    let [x_end, y_end] = [maps.length - 1, maps[0].length - 1]
    let dx = [1,0,-1,0];
    let dy = [0,1,0,-1];
    let queue = [[0,0]];
    
    while(queue.length !== 0){
        let [dot_x, dot_y] = queue.shift();
        for(let i = 0; i < dx.length; i++){
            let x = dx[i] + dot_x;
            let y = dy[i] + dot_y;
            
            if(x > x_end || x < 0 || y > y_end || y < 0) continue;
            if(maps[x][y] !== 1) continue;
            queue.push([x,y]);
            maps[x][y] += maps[dot_x][dot_y];
        }
    }
    
    return maps[x_end][y_end] !== 1 ? maps[x_end][y_end] : -1 ;
}