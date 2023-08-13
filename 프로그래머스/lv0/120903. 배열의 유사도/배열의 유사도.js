function solution(s1, s2) {
    return s1.filter((e,i) => s2.includes(e)).length;
}