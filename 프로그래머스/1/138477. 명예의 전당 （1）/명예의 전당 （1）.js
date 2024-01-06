function solution(k, score) {
    let answer = [];
    let k_score = [];
    for(let i = 0; i < score.length; i++){
        if(k_score.length < k){
            k_score.push(score[i]);
        }else if(Math.min(...k_score) < score[i]){
            k_score.pop();
            k_score.push(score[i])
        }
        k_score.sort((a,b) => b - a)
        answer.push(Math.min(...k_score))
    }
    return answer;
}