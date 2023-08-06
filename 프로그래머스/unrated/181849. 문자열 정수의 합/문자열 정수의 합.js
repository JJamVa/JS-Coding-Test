function solution(num_str) {
    var total = 0
    var arr = num_str.split("")
    for(var i in arr){
        total += parseInt(arr[i])
    }
    return total;
}