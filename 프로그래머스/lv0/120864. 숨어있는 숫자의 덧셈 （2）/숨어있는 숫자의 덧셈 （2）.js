function solution(my_string) {
    return my_string
            .replace(/[a-z]|[A-Z]/g, " ")
            .split(" ")
            .filter(e => e !== "")
            .map(Number)
            .reduce((a,b) => a+b,0)
}