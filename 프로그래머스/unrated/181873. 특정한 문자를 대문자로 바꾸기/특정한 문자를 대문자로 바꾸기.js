function solution(my_string, alp) {
    var answer = my_string.split("");
    for(var i in answer){
        if(answer[i] === alp){
            answer[i] = answer[i].toUpperCase()
        }
    }
    return answer.join("");
}