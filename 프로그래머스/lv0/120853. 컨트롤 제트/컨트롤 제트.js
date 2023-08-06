function solution(s) {
    var answer = 0
    var arr = s.split(" ")
    for(var i in arr){
        if(arr[i] === "Z") {
            answer -= parseInt(arr[i - 1]); 
            continue;
        }
        answer += parseInt(arr[i])
    }
    return answer;
}