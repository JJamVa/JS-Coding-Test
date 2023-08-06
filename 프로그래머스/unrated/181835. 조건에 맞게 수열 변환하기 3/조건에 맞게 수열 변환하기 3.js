function solution(arr, k) {
    if(k % 2 === 1){
        arr = arr.map(i => i * k)
    }
    else{
        arr = arr.map(i => i + k)
    }
    return arr;
}