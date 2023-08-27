function solution(d, budget) {
    var answer = [...d];
    while(budget > 0){
        if(budget < d[0])break
        budget -= d.shift()
    }
    return answer.length - d.length;
}