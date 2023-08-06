function solution(dots) {
    var [x,y] = [0,0];
    for(var i = 0; i < dots.length; i++){
        if(dots[0][0] === dots[i][0]) y = Math.abs(dots[0][1] - dots[i][1])
        if(dots[0][1] === dots[i][1]) x = Math.abs(dots[0][0] - dots[i][0])
    }
    return x*y;
}