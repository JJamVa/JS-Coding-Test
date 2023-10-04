function solution(food) {
    var answer = '';
    let [left,right] = ['',''];
    for(let i in food){
        if(food[i] / 2 > 0){
            left = left + i.toString().repeat(parseInt(food[i]/2))
            right = i.toString().repeat(parseInt(food[i]/2)) + right
        }
    }
    return left + "0" + right
}