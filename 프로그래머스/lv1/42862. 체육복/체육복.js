function solution(n, lost, reserve) {
    let answer = Array.from({length:n}, (e,i) => reserve.includes(i+1) ? 2 : 0);
    for(let i = 0; i < lost.length; i++){
        answer[lost[i] - 1] === 0 ? answer[lost[i] - 1] = -1 : answer[lost[i] - 1] = 1
    }
    
    for(let j = 1; j < answer.length; j++){
        if(answer[j - 1] > 1 && answer[j] === -1){
            answer[j - 1] -= 1
            answer[j] += 1
        }else if(answer[j - 1] === -1 && answer[j] > 1){
            answer[j - 1] += 1
            answer[j] -= 1
        }
    }
    
    answer.reverse()
    
    for(let k = 1; k < answer.length; k++){
        if(answer[k - 1] > 1 && answer[k] === -1){
            answer[k - 1] -= 1
            answer[k] += 1
        }else if(answer[k - 1] === -1 && answer[k] > 1){
            answer[k - 1] += 1
            answer[k] -= 1
        }
    }

    return answer.filter(e => e >= 0).length;
}