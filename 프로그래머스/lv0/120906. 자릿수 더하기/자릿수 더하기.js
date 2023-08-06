function solution(n) {
    var answer = 0
    var value = String(n)
    for(var idx in value){
        answer += parseInt(value[idx])
    }
    return answer;
}