function solution(q, r, code) {
    var answer = code
                .split("")
                .map((element,index) => {
        if(index % q === r) {
            return code[index]
        }
    }).filter(element => {return !(element === null) && !(element === undefined)})
    return answer.join("");
}