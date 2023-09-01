function solution(arr, k) {
    let answer = Array.from(new Set(arr))
    console.log(answer)
    while(answer.length !== k){
        answer.length > k ? answer.pop() : answer.push(-1)
        
    }
    
    return answer;
}