function solution(a, b, c, d) {
    let x = [a,b,c,d].sort((a,b) => a - b);
    if(x[0] === x[3]) return x[0] * 1111
    else if(x[0] === x[2]) return Math.pow((10 * x[0] + x[3]),2)
    else if(x[1] === x[3]) return Math.pow((10 * x[3] + x[0]),2)
    else if(x[0] === x[1]){
        if(x[2] === x[3]) return (x[0] + x[2]) * Math.abs(x[0] - x[2])
        else return x[2] * x[3]
    }else if(x[1] === x[2]) return x[0] * x[3]
    else if(x[2] === x[3]){
        if(x[0] === x[1]) return (x[0] + x[2]) * Math.abs(x[0] - x[2])
        else return x[0] * x[1]
    }else return x[0]
}