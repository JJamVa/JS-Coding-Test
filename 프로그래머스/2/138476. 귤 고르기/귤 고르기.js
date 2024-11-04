function solution(k, tangerine) {
    let info = {};
    let answer = 0;
    
    
    for(let i = 0; i < tangerine.length; i++){
        if(info[tangerine[i]]){
            info[tangerine[i]] += 1;
        }else{
            info[tangerine[i]] = 1;
        }
    }
    
    let count = Object.values(info).sort((a,b) => b - a);
    
    while(k > 0){
        k -= count.shift();
        answer++;
    }
       
    return answer;
}