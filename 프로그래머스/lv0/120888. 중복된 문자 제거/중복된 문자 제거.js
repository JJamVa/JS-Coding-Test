function solution(my_string) {
    var answer = new Set(my_string.split(""));
    return Array.from(answer).join("")
}