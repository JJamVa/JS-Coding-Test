function solution(a, d, included) {
    var answer = Array.from({length:included.length}, element => 0);
    answer.map((element,index) => {
        if(included[index] === true) {
            answer[index] = a + (d * index)
        }
        else {
            answer[index] = 0
        }
    })
    return answer.reduce((a,b)=> a+b);
}