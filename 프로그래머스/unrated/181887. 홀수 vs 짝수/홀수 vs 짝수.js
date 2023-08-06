function solution(num_list) {    
    var answer = [0,0];//left odd, right even
    for(var i in num_list){
        if(i % 2 === 0) answer[0] += num_list[i]
        else answer[1] += num_list[i]
    }
    return Math.max(...answer);
}