function solution(score) {
    let answer = score.map(e => e.reduce((a,b) => a + b,0))
    let result = answer.map(e => {
        var count = 0
        for(var i = 0; i < answer.length; i++){
            if(e < answer[i]) count++;
        }
        return count
    }).map(e => e + 1)
    return result;
}