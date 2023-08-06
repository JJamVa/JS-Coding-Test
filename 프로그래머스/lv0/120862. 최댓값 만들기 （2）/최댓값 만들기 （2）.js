function solution(numbers) {
    numbers.sort(function(a,b) {return a - b})
    var negative_max = numbers[0] * numbers[1]
    var positive_max = numbers[numbers.length - 2] * numbers[numbers.length -1]
    return negative_max > positive_max ? negative_max : positive_max
}