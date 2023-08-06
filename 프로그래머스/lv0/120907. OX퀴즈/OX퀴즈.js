function solution(quiz) {
    var process = new Array()
    var answer = [];
    for(var idx in quiz){
        process = quiz[idx].split("=")
        if(eval(process[0]) === eval(process[1])) answer.push("O")
        else answer.push("X")
        // process.clear
    }
    return answer;
}