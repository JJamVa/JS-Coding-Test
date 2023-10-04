function solution(a, b, n) {
    let answer = 0;
    let rest = 0;
    while(n > 1 && n >= a){
        rest = n % a
        answer += parseInt(n / a) * b
        n = parseInt(n / a) * b + rest
    }
    return answer
}