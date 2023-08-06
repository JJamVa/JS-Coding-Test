function solution(strArr) {
    var answer = Array.from({length:31}, element => 0);
    strArr.map((element,index) => {
        answer[element.length] += 1
    })
    return Math.max(...answer);
}