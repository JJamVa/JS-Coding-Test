function solution(A,B){
    A.sort((a,b) => a - b)
    B.sort((a,b) => b - a)
    return A.map((e,i) => e * B[i]).reduce((a,b) => a + b,0);
}