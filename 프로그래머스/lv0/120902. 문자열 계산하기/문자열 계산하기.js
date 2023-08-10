function solution(my_string) {
    var answer = [];
    var check = false
    var arr = my_string.split(" ")
    arr.forEach(e => {
        if(e === "-") check = true
        if(!isNaN(e)) {
            check ? answer.push("-" + e) : answer.push(e)
            check = false
        }
    })
    return answer.map(Number).reduce((a,b) => a + b,0);
}