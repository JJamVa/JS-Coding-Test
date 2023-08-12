function solution(absolutes, signs) {
    var answer = absolutes.map((e,i) => {
        if(!signs[i]) return parseInt("-" + e.toString())
        return e
    })
    return answer.reduce((a,b) => a + b, 0);
}