function solution(n) {
    var count = 0;
    for(var i = 1; i <= n; i++){
        for(var j = 2; j < i; j++){
            if(i % j === 0) {
                count++; 
                break;
            }
        }
    }
    return count;
}