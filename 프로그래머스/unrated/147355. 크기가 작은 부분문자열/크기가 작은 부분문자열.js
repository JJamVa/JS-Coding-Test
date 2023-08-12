function solution(t, p) {
    var answer = 0;
    for(let i = 0; i < t.length; i++){
        let str = t.substr(i, p.length)
        if(str.length !== p.length) continue;
        if(str.toString() <= p.toString()) answer++
    }
    return answer;
}