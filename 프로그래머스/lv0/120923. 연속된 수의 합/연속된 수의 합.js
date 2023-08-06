function solution(num, total) {
    var answer = [];
    var count = num
    for(var i = parseInt(total/num) - parseInt(num/2); count != -1;i++){
        answer.push(i)
        count--
    }
    if(num % 2 === 0) answer.shift()
    else answer.pop()
    
    return answer;
}