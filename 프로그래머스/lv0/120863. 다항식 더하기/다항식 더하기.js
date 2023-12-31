function solution(polynomial) {
    let answer = polynomial.split(" + ")
    let [x_arr,num_arr] = [[],[]]
    for(let x = 0; x < answer.length; x++){
        if(answer[x].includes("x")) answer[x] !== "x" ? x_arr.push(answer[x]) : x_arr.push("1x")
        else num_arr.push(answer[x])
    }
    let x_result = x_arr.map(e => e.replace("x","")).reduce((a,b) => a + parseInt(b),0)
    let num_result = num_arr.reduce((a,b) => a + parseInt(b),0);
    
    if(x_result === 0) return num_result.toString()
    else if(num_result === 0) return `${x_result !== 1 ? x_result : ""}x`
    return `${x_result !== 1 ? x_result : ""}x + ${num_result}`
}