function solution(n) {
    let answer = 0;
    for(let i = n + 1;;i++){
        answer = i
        if(n.toString(2).split("1").length === i.toString(2).split("1").length)break
    }
    return answer;
}