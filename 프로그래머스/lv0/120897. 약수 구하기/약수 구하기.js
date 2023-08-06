function solution(n) {
    var answer = [];
    for(var idx = 1; idx <= parseInt(n/2); idx++){
        if(n % idx === 0)answer.push(idx)
    }
    answer.push(n)
    return answer;
}