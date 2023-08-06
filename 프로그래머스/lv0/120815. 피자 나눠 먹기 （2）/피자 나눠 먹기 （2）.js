function solution(n) {
    // if(n % 6 === 0) return n / 6
        var count = 1;
        while(1){
            if(count * 6 % n === 0) return count
            count++;
        }
}