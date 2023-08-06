function solution(num_list) {
    var answer = num_list.sort((a,b) => a - b);
    var i = 0
    while(i++ < 5){
        answer.shift()
    }
    return answer;
}