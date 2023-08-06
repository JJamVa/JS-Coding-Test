function solution(intStrs, k, s, l) {
    var answer = [];
    for(var i of intStrs){
        var slice = i.substr(s,l)
        if(slice > k) answer.push(parseInt(slice))
    }
    return answer;
}