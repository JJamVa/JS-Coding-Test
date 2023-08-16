const fact = value =>{
    var sum = 1;
    for(var i = 1; i <= value; i++){
        sum *= i
    }
    return sum
}

function solution(balls, share) {
    if(balls <= share) return 1;
    return Math.round(fact(balls) / (fact(balls - share) * fact(share)));
}
