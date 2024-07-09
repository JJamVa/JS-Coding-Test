function solution(progresses, speeds) {
    let answer = [];
    let idx = 0;
    
    while(idx < progresses.length){
        let count = 0;
        progresses = progresses.map((e,i) => e + speeds[i]);
        while(progresses[idx] >= 100){
            idx++;
            count++;
        }
        if(count !== 0) answer.push(count);
    }
    return answer;
}