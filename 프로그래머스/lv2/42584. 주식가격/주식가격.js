function solution(prices) {
    var answer = prices.map((element,index) => {
        let count = 0
        for(var i = index + 1; i < prices.length; i++){
            if(element <= prices[i]) count++
            else return count + 1
        }
        return count
    })
    return answer;
}