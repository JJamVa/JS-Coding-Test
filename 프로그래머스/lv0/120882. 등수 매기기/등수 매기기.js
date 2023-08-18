function solution(score) {
    let answer = score.map(e => e.reduce((a,b) => a + b,0))
    let result = answer.map(e => {
        var count = 1
        for(var i = 0; i < answer.length; i++){
            if(e < answer[i]) count++;
        }
        return count
    })
    return result;
}