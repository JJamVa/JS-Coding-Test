function solution(my_string) {
    var answer = [];
    for(var i in my_string){
        answer.push(my_string.substr(i))
    }
    return answer.sort();
}