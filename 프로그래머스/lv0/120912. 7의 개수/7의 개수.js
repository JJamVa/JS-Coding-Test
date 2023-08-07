function solution(array) {
    var answer = array.join("")
    var arr_7 = Array.from(String(answer))
    var check = 0
    for(var idx in arr_7){
        if(arr_7[idx] === String(7)) check++
    }
    return check;
}