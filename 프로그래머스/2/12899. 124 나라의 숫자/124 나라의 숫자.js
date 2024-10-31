function solution(n) {
    let arr = ["1","2","4"]
    let answer = '';
    let idx = 1;
    while(n > 0){
        let current = Math.pow(3,idx);
        let before = Math.pow(3, idx - 1);
        
        let calculate = parseInt((n - 1) % current / before)
        answer = arr[calculate] + answer;
        n -= current;
        idx++;
    }
    
    
    
    return answer;
}