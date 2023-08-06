function solution(n) {
    var answer = [];
    var i = n
    while(i !== 1){
        answer.push(i)
        if(i % 2 === 0) i /= 2
        else i = 3 * i + 1
    }
    answer.push(1)
    return answer;
}