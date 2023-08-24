function solution(s) {
    var answer = s.split("").map(e => !isNaN(e) ? e : false);
    return (answer.length === 4 || answer.length === 6) && !answer.includes(false) ? true : false ;
}