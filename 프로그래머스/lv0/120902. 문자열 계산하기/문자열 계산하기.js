function solution(my_string) {
    var answer = [];
    var str_arr = my_string.split(" ")
    for(var i = 0; i < str_arr.length; i++){
        if(isNaN(str_arr[i])){
            str_arr[i + 1] = str_arr[i] + str_arr[i + 1]
            continue
        }
        answer.push(str_arr[i])
    }
    return answer.map(Number).reduce((a,b) => a + b,0);
}