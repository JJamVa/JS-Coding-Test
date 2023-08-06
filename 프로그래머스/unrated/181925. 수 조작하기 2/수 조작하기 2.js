function solution(numLog) {
    var answer = '';
    for(var i = 1; i < numLog.length; i++){
        var value = numLog[i] - numLog[i - 1]
        switch(value){
            case 1:
                answer += "w"
                break
            case -1:
                answer += "s"
                break
            case 10:
                answer += "d"
                break
            case -10:
                answer += "a"
                break
            default: break
        }
    }
    return answer;
}