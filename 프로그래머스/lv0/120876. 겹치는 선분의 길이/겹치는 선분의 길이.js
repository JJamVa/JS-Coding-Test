function solution(lines) {
    var answer = [...lines].sort((a,b) => a[0] - b[0]).flat();
    let split_arr = []
    let result = 0
    for(var i = answer[0] - 1; i < answer[answer.length - 1]; i++){
        split_arr.push([i,i+1])
    }
    for(var i = 0; i < split_arr.length; i++){
        let count = 0
        for(var j = 0; j < lines.length; j++){
            if(lines[j][0] <= split_arr[i][0] && split_arr[i][1] <= lines[j][1]) count++;
        }
        if(count > 1) result++
    }
    return result
}