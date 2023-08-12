function solution(n) {
    return parseInt(Math.sqrt(n))**2 === n ? Math.pow(parseInt(Math.sqrt(n)) + 1,2) : -1;
}