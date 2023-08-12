function solution(a, b) {
    return a.map((e,i) => e * b[i]).reduce((a,b) => a + b,0);
}