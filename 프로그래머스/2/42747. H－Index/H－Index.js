function solution(citations) {
    let answer = [];
    for(let i = 0; i < citations.length; i++){
       let value = citations.filter(e => e >= citations[i] && e !== 0)
       if(citations[i] >= value.length) answer.push(value.length) 
    }
    return Math.max(...answer);
}