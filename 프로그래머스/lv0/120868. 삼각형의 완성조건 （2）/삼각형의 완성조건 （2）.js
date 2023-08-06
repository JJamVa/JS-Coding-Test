function solution(sides) {
    var answer = 0;
    for(var i = 1; i < sides[0] + sides[1]; i++){
        var test = [...sides]
        test.push(i)
        test.sort((a,b) => a - b)
        if(test[0] + test[1] > test[2]) answer+=1
        console.log(`${test[0]} ${test[1]} ${test[2]} ${test[0] + test[1] <= test[2]}`)
    }
    return answer;
}