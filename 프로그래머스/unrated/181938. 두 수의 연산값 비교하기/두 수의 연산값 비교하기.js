function solution(a, b) {
    return eval(String(a) + String(b)) >= 2 * a * b ? eval(String(a) + String(b)) : 2 * a * b;
}