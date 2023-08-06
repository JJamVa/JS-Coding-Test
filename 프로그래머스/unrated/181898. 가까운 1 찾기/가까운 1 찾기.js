function solution(arr, idx) {
    return arr.findIndex((element,index) => index >= idx && element === 1);
}