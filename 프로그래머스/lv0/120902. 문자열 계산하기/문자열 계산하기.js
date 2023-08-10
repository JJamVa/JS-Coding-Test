function solution(my_string) {
    var [answer,check] = [[], false];
    my_string.split(" ").forEach(e => {
        if(e === "-") check = true
        if(!isNaN(e)) {
            check ? answer.push("-" + e) : answer.push(e)
            check = false
        }
    })
    return answer.map(Number).reduce((a,b) => a + b,0);
}