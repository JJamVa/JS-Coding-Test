function solution(n) {
    var answer = 1;
    var acc = 1;
    let i = 1;

    while(true){
        acc *= i
        if(acc > n) return i - 1
        answer = i++;
    }

    return answer;
}