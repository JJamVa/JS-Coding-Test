function solution(arr) {
    for(var i in arr){
        for(var j in arr[0]){
            if(arr[i][j] !== arr[j][i]) return 0
        }
    }
    return 1;
}