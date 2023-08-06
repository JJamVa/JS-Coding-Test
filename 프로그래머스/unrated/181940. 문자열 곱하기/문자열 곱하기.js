function solution(my_string, k) {
    return Array.from({length: k}, element => my_string).join("");
}