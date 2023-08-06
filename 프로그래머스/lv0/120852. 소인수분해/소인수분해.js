function solution(n) {
    var answer = [];
    var left = n
    for(var i = 2; i <= parseInt(n/2); i++){
        if(left % i === 0){
            while(1){
                if(left % i === 0) left /= i
                else break
            }
            answer.push(i)
        }
    }
    if(answer.length === 0) answer.push(n)
    return answer;
}