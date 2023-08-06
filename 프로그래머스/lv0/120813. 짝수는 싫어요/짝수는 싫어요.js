function solution(n) {
    var answer = new Array()
    for(var i = 1; i <= n; i++){
        if(i % 2 === 1) answer.push(i)
    }
    return answer;
}