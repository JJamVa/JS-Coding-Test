function solution(order) {
    var answer = 0;
    var orders = {
        "americano" : 4500,
        "cafelatte" : 5000
    }
    for(var i of order){
        if(i.includes("cafelatte")) answer += orders["cafelatte"]
        else answer += orders["americano"]
    }
    return answer;
}