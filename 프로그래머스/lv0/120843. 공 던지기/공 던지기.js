function solution(numbers, k) {
    var answer = [...numbers];
    while(answer.length < 2*k - 2){
        answer = answer.concat(numbers)
    }
    return answer[2*k - 2];
}