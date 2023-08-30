function solution(absolutes, signs) {
    var answer = absolutes.map((e,i) => {
        if(!signs[i]) return -e
        return e
    })
    return answer.reduce((a,b) => a + b, 0);
}