function solution(number) {
    return eval(number.split("").join("+")) % 9;
}