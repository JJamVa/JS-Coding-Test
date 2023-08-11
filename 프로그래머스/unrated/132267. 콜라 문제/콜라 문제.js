function solution(a, b, n) {
    var answer = 0;
    var rest = 0;
    while(n > 1 && n >= a){
        rest = n % a
        answer += parseInt(n / a) * b
        console.log(answer)
        n = parseInt(n / a) * b + rest
    }
    return answer
}