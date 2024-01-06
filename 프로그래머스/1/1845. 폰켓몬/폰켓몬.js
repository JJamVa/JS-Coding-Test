function solution(nums) {
    var answer = new Set();
    nums.forEach((e,i) => answer.add(e))
    return parseInt(nums.length / 2) <= Array.from(answer).length 
            ? parseInt(nums.length / 2)
            : Array.from(answer).length ;
}