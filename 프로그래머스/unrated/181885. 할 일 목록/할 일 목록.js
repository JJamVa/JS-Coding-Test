function solution(todo_list, finished) {
    var answer = [];
    for(var i in finished){
        if(finished[i] === false){
            answer.push(todo_list[i])
        }
    }
    return answer;
}