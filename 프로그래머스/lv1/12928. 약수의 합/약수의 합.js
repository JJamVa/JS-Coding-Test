function solution(n) {
    var answer = Array.from({length:n},(e,i) => i + 1)
    return answer.filter(e => n % e === 0).reduce((a,b) => a + b,0);
}