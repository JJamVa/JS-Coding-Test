function solution(polynomial) {
    var answer = '';
    if(polynomial.length === 1 && polynomial[0] === 'x') return 'x'
    var [x_arr,num_arr] = [[],[]]
    var arr = polynomial.split(" ")
    for(var i in arr){
        if(arr[i].includes("x")){
            if(arr[i].length === 1) x_arr.push(1)
            else{
                var arr1 = arr[i].split("x")
                x_arr.push(parseInt(arr1[0]))
            }
        }
        else if(!isNaN(parseInt(arr[i]))){
            num_arr.push(parseInt(arr[i]))
        }
    }
    
    if(x_arr.length > 0){
        const x_sum = x_arr.reduce((a,b) => a+b)
        if(num_arr.length > 0){
            if(x_sum === 1) answer += ("x + ")
            else answer += (x_sum.toString() + "x + ")
        }else answer += (x_sum.toString() + "x")
    }
    
    if(num_arr.length > 0){
        const sum = num_arr.reduce((a,b) => a+b)
        if(sum > 0) answer += sum.toString()
    }
    
    return answer;
}