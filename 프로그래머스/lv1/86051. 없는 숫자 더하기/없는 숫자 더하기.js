function solution(numbers) {
    let answer = []
    for(let i = 0; i <= 9; i++){
        if(!numbers.includes(i)) answer.push(i)
    }
    return answer.reduce((a,b)=> a+b,0);
}