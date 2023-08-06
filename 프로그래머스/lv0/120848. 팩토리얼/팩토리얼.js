const rec = (value, n) => {
    if(value > n) return value - 1;
    return rec(value + 1, parseInt(n / value))
}


function solution(n) {
    return rec(1,n);
}