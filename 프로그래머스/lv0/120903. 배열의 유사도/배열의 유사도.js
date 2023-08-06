function solution(s1, s2) {
    var answer = s1.concat(s2)
    const set = new Set()
    answer.map(element => set.add(element))
    return Math.abs(set.size - (s1.length+s2.length));
}