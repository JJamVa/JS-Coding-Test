function solution(n, left, right) {
    let array = [];
    
    for(let i = left; i <= right; i++){
        array.push(Math.max(parseInt(i / n) + 1, i % n + 1));
    }
    
    return array;
}