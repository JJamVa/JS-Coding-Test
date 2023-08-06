function solution(n, numlist) {
    var answer = [];
    for(var idx in numlist){
        if(numlist[idx] % n === 0) answer.push(numlist[idx])
    }
    return answer;
}