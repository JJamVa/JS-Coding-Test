function solution(num_list, n) {
    var answer = Array.from(Array(num_list.length/n), element => Array(n).fill(0))
    for(var i in num_list){
        answer[parseInt(i / n)][parseInt(i % n)] = num_list[i]
    }
    return answer;
}