let check = arr => {
    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] > 1 && arr[i] === -1){
            arr[i - 1] -= 1
            arr[i] += 1
        }else if(arr[i - 1] === -1 && arr[i] > 1){
            arr[i - 1] += 1
            arr[i] -= 1
        }
    }
    return arr   
}

function solution(n, lost, reserve) {
    let answer = Array.from({length:n}, (e,i) => reserve.includes(i+1) ? 2 : 0);
    for(let i = 0; i < lost.length; i++){
        answer[lost[i] - 1] === 0 ? answer[lost[i] - 1] = -1 : answer[lost[i] - 1] = 1
    }
    return check(check(answer).reverse()).filter(e => e >= 0).length;
}