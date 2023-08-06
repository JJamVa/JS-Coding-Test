function solution(n, k) {
    var answer = new Array()
    for(var i = k; i <= n; i+=k){
        answer.push(i)
    }
    return answer;
}