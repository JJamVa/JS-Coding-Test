function solution(s) {
    let answer = 0;
    let arr = s.split("");
    let size = arr.length
    
    while(size !== 0){
        let stack = [];
        for(let i = 0; i < arr.length; i++){
            if(stack[stack.length - 1] === "[" && arr[i] === "]" || 
              stack[stack.length - 1] === "{" && arr[i] === "}" ||
               stack[stack.length - 1] === "(" && arr[i] === ")" 
              ){
                stack.pop();
            }else{
                stack.push(arr[i])
            }
        }
        answer = stack.length === 0 ? answer += 1 : answer
        arr.push(arr.shift())
        size--;
    }
    
    return answer;
}