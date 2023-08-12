function solution(s) {
    let num_obj = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
    };
    for(let i in num_obj){
        s = s.replaceAll(i, num_obj[i])
    }
    return parseInt(s);
}