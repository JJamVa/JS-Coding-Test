function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++){
        let check = false;
        for(let j = 0; j <= 9; j++){
            if(j === 0 || j === 5) continue
            if(i.toString().includes(j.toString())){
                check = true
                break;
            }
        }
        if(!check) answer.push(i)
    }
    return answer.length === 0 ? [-1] : answer;
}