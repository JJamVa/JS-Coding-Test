function solution(a, b) {
    let answer = Array.from({length: Math.max(a,b) - Math.min(a,b) + 1},(e,i) => Math.min(a,b) + i)
    return answer.reduce((a,b) => a + b,0);
}