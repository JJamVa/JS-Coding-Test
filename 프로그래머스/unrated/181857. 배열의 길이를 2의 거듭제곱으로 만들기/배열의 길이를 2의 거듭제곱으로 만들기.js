function solution(arr) {
    var number = 0
    while(arr.length > Math.pow(2,number)){
        number++
    }
    for(var i = arr.length; i < Math.pow(2,number); i++){
        arr.push(0)
    }
    return arr;
}