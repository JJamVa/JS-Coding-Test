function solution(my_string, m, c) {
    return my_string
                .split("")
                .filter((element,index) => element = index % m === c - 1)
                .join("");
}