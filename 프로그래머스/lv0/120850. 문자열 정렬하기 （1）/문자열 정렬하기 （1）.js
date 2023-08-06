function solution(my_string) {
    var answer = [];
    for(var idx in my_string){
        if(!isNaN(`${my_string[idx]}`)) answer.push(parseInt(my_string[idx]))
    }
    answer.sort(function(a,b) {return a - b})
    return answer;
}