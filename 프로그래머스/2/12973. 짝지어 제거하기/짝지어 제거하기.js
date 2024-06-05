function solution(s){
    let stack = [];
    
    for(let i of s){
        i === stack[stack.length - 1] ? stack.pop() : stack.push(i)
    }
    
    return stack.length > 0 ? 0 : 1;
}