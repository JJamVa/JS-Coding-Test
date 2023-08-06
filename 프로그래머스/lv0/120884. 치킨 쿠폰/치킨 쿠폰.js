function solution(chicken) {
    var answer = 0;
    while(chicken > 9){
        answer += parseInt(chicken/10);
        chicken = parseInt(chicken/10) + parseInt(chicken % 10)
    }
    return answer;
}