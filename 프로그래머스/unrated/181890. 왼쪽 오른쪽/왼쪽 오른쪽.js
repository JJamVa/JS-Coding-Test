function solution(str_list) {
    var answer = [];
    console.log(answer.flat())
    for(let i = 0; i < str_list.length; i++){
        if(answer.length !== 0) break
        str_list[i] === "l" ? answer.push(str_list.splice(0,i))
                            : str_list[i] === "r"
                            ? answer.push(str_list.splice(i+1))
                            : null
    }
    return answer.flat();
}