function solution(n) {
    let answer = Array.from({length:n}, (e,i) => i + 1);
    let len = parseInt(Math.sqrt([...answer].length))
    for(let i = 2; i <= len; i++){
        for(let j = 2; i * j <= n; j++){
            answer[i * j - 1] = false
        }
    }

    return answer.filter(e => e !== false).length - 1;
}