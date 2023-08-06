function solution(numbers, n) {
    var total = 0
    for(var arr in numbers){
        if(total > n) break
        total += numbers[arr]
    }
    return total
}