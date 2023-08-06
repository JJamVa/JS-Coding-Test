function solution(numbers) {
    var answer = "";
    var number = {
        "one" : "1",
        "two" : "2",
        "three" : "3",
        "four" : "4",
        "five":"5",
        "six":"6",
        "seven":"7",
        "eight" : "8",
        "nine" : "9",
        "zero" : "0"
    }
    
    for(var i in number){
        numbers = numbers.split(i).join(number[i])
    }
    
    return parseInt(numbers);
}