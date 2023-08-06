function solution(my_string, target) {
    let check = my_string.split(target)
    return check.length >= 2 ? 1 : 0;
}