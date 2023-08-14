function solution(a, b) {
    var answer = [];
    for(let i = 1; i <= b; i++){
        if(a % i === 0 && b % i === 0){
            a = parseInt(a / i)
            b = parseInt(b / i)
        }
    }
    
    for(let count = 1; count <= b; count++){
        if(b % count === 0) answer.push(count)
    }
    
    let result = answer.filter(e => e % 2 !== 0).filter(e=> e % 5 !== 0)
    return result.length > 1 ? 2 : 1
}