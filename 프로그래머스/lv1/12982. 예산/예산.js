function solution(d, budget) {
    var answer = [...d];
    d = d.sort((a,b) => a - b)
    while(d.length !== 0 || budget >= 0){
        let current = d.shift()
        budget -= current
        if(budget < 0){
            d.unshift(current)
            break
        }
    }
    return answer.length - d.length;
}