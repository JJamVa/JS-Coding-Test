function solution(num) {
    var answer = 0;
    let count = 1
    while(num !== 1 && count < 500){
        num = num % 2 === 0 ? parseInt(num / 2) : num * 3 + 1
        count++
    }
    return count === 500 ? -1 : count - 1;
}