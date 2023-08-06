function solution(num_list) {
    var answer = num_list.map((element, index) => {
        var result = 0
        while(element !== 1){
            element = parseInt(element / 2)
            result++
        }
        return result
    })
    return answer.reduce((a,b) => a+b);
}