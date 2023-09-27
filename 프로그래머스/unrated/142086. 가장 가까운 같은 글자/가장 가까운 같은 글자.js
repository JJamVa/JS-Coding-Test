function solution(s) {
    let answer = [];
    let check_str = "";
    for(var i = 0; i < s.length; i++){
       !check_str.includes(s[i]) ? answer.push(-1) : answer.push(i - check_str.lastIndexOf(s[i]))
        check_str += s[i]
    }
    
    return answer
}