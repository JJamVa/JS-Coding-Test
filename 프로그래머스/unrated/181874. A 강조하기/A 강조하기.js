function solution(myString) {
    var arr = myString.split("")
    for(var i in arr){
        arr[i].toLowerCase() === 'a' ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].toLowerCase()
    }
    return arr.join("");
}