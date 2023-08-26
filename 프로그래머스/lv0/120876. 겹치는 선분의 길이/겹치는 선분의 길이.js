function solution(lines) {
    var answer = [...lines].sort((a,b) => a[0] - b[0]).flat();
    let split_arr = []
    let arr = []
    for(var i = answer[0] - 1; i < answer[answer.length - 1]; i++){
        split_arr.push([i,i+1])
    }
    for(var i = 0; i < split_arr.length; i++){
        let count = 0
        if(lines[0][0] <= split_arr[i][0] && split_arr[i][1] <= lines[0][1]) count++;
        if(lines[1][0] <= split_arr[i][0] && split_arr[i][1] <= lines[1][1]) count++;
        if(lines[2][0] <= split_arr[i][0] && split_arr[i][1] <= lines[2][1]) count++;
        if(count > 1) arr.push(split_arr[i])
    }
    return arr.length
}