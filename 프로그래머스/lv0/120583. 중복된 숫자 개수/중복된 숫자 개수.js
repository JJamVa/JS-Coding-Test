function solution(array, n) {
    var answer = 0;
    for(let index in array){
        if(array[index] === n) answer++
    }
    return answer;
}