function solution(arr) {
    let answer = arr.filter(e => e !== Math.min(...arr));
    console.log(arr)
    return answer.length !== 0 ? answer : [-1];
}