function solution(clothes) {
    var answer = 1;
    let info = {};
    
    for(let i = 0; i < clothes.length; i++){
        if(info[clothes[i][1]]){
            info[clothes[i][1]] += 1;
        }else{
            info[clothes[i][1]] = 1;
        }
    }
    
    let count = Object.values(info)
    for(let i = 0; i < count.length; i++){
        answer *= (count[i] + 1)
    }
    
    
    return answer - 1;
}