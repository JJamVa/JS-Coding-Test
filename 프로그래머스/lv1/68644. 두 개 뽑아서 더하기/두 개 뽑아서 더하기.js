function solution(numbers) {
    let result = new Set()
    for(var i = 0; i < numbers.length; i++){
        for(var j = i + 1; j < numbers.length; j++){
            result.add(numbers[i] + numbers[j])
        }
    }
    return Array.from(result).sort((a,b) => a - b);
}