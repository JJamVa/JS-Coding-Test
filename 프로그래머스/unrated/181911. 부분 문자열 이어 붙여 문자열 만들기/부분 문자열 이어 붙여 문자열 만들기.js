function solution(my_strings, parts) {
    var answer = '';
    for(var i in parts){
        answer += my_strings[i].substr(parts[i][0], Math.abs(parts[i][1] - parts[i][0]) + 1)
    }
    return answer;
}