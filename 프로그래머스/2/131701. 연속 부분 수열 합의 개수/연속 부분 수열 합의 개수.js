function solution(elements) {
    let answer = new Set();
    let idx = 0;
    
    while(idx < elements.length){
        elements.push(elements.shift())
        for(let i = 0; i < elements.length; i++){
            let arr = [...elements].splice(0,i + 1);
            answer.add(arr.reduce((a,b) => a + b, 0))
        }
        idx++;
    }
    
    return answer.size;
}