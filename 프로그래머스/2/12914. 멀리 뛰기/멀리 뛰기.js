function solution(n) {
    let answer = [1,2];
    
    if(n <= 2) return answer[n - 1];
    
    for(let i = 2; i <= n; i++){
        answer.push((answer[i - 2] + answer[i - 1]) % 1234567);
    }
    
    return answer[n - 1];
}
