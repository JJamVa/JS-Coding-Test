function solution(my_string) {
    var answer = my_string.split("")
    for(var index in answer){
        if(answer[index] === answer[index].toUpperCase()) {
            answer[index] = answer[index].toLowerCase()
        }
        else answer[index] = answer[index].toUpperCase()
    }
    return answer.join("");
}