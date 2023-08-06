function solution(n, k) {
    var survice = parseInt(n / 10);
    // if(k < survice) k = survice
    var total = 12000 * n + 2000 * (k - survice)
    return total;
}