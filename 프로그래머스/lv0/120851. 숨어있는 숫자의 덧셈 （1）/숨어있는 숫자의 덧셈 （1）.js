function solution(my_string) {
    var answer = 0;
    for(var index in my_string){
        if(isNaN(my_string[index]) === false) answer += parseInt(my_string[index])
    }
    return answer;
}