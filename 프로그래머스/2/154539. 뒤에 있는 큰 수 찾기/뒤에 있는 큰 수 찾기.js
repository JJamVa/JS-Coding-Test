function solution(numbers) {
    let answer = Array.from({length: numbers.length}, () => -1);
    let stack = [numbers[numbers.length - 1]];
    let idx = numbers.length - 2;
    
    while(idx > -1){
        while(stack[stack.length - 1] <= numbers[idx]){
            stack.pop();
        }
        
        if(stack.length > 0){
            answer[idx] = stack[stack.length - 1]
        }
        stack.push(numbers[idx])
        idx--;
    }
    
    return answer;
}