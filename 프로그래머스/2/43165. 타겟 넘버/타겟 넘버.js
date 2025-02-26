function solution(numbers, target) {
    let count = 0;
    
    function dfs(idx, sum){
        if(numbers.length === idx){
            if(sum === target) count = count + 1
            return
        }
        
        dfs(idx + 1, sum + numbers[idx])
        dfs(idx + 1, sum - numbers[idx])
    }
    
    dfs(0,0)
    
    return count;
}