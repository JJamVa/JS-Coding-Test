const cal_1 = (a,b) => Math.pow(a,2) + Math.pow(b,2)
const cal_2 = (a,b) => 2 * (a + b)
const cal_3 = (a,b) => Math.abs(a - b)

function solution(a, b) {
    var answer = 0;
    switch(a % 2){
        case 1:
            if(b % 2 === 1) answer = cal_1(a,b)
            else answer = cal_2(a,b)
            break
        default:
            if(b % 2 === 1) answer = cal_2(a,b)
            else answer = cal_3(a,b)
            break
    }
    return answer;
}