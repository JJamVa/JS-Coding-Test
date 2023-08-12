function solution(left, right) {
    var answer = [];
    for(let i = left; i <= right; i++){
        let count = 0
        for(let j = 1; j <= i; j++){
            if(i % j === 0) count++
        }
        count % 2 === 0 ? answer.push(i) : answer.push(-i)
    }
    return answer.reduce((a,b) => a + b, 0);
}