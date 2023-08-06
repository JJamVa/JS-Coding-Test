function solution(slice, n) {
    var check = parseInt(n / slice)
    var out = n % slice
    if(out === 0) answer = check
    else answer = check + 1;
    return answer;
}