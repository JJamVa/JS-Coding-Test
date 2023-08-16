function solution(arr) {
    var answer = [];
    while(arr.length !== 0){
        if(arr[0] !== 2) arr.shift()
        if(arr[arr.length - 1] !== 2) arr.pop()
        if(arr[0] === 2 && arr[arr.length - 1] === 2) break
    }
    return arr.length !== 0? arr : [-1];
}