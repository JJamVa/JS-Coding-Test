const calculate1 = (a,b,c) => {
    return a + b + c
}
const calculate2 = (a,b,c) => {
    return (a + b + c) * (Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2))
}
const calculate3 = (a,b,c) => {
    return (a + b + c) * (Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2)) * (Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3))
}

function solution(a, b, c) {
    var answer = 0;
    switch(a){
        case b: 
            if(b === c){answer = calculate3(a,b,c)}
            else {answer = calculate2(a,b,c)}
            break
        case c:
            answer = calculate2(a,b,c)
            break
        default:
            if(b === c) answer = calculate2(a,b,c)
            else answer = calculate1(a,b,c)
            break
    }
    return answer;
}