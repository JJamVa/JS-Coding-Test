function solution(box, n) {
    var width = 1
    for(let i in box){
        width *= (box[i] - parseInt(box[i] % n))
    }
    console.log(width)
    return width / Math.pow(n,3);
}