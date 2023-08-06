function solution(numbers, direction) {
    var value = 0
    if(direction === "right"){
        value = numbers.pop()
        numbers.unshift(value)
        // numbers.reverse().unshift(value)
    }
    else{
        value = numbers.shift()
        numbers.push(value)
    }
    return numbers
}