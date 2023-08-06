function solution(n, control) {
    var [w_length,s_length,d_length,a_length] = [
        control.split("w").length - 1,
        control.split("s").length - 1,
        control.split("d").length - 1,
        control.split("a").length - 1
    ]
    return n + w_length - s_length + 10 * d_length - 10 * a_length;
}