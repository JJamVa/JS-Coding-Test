function solution(x, n) {
    var answer = Array.from({length: n}, (e,i) => x + x*i)
    return answer;
}