function solution(s) {
    let answer = [0, 0]
    
    while(s.length > 1){
        let len = s.length
        let splitZero = s.split("0").join("").length
        s = splitZero.toString(2)
        answer[1] += (len - splitZero);
        answer[0]++;
    }
    
    return answer;
}