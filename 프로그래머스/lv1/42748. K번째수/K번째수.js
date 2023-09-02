function solution(array, commands) {
    var answer = [];
    for(let i of commands){
        let sorted_arr = i[0] === i[1] ? [...array].splice(i[0] - 1, 1).sort((a,b) => a - b)
                                       : [...array].splice(i[0] - 1, i[1] - i[0] + 1).sort((a,b) => a - b)
        console.log(sorted_arr)
        answer.push(sorted_arr[i[2] -1])
    }
    return answer;
}