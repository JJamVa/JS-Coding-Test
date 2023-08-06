function solution(rsp) {
    var answer = '';
    for(var idx in rsp){
        if(rsp[idx]==="2") answer += "0"
        else if(rsp[idx]==="0") answer += "5"
        else answer += "2"
    }
    return answer;
}