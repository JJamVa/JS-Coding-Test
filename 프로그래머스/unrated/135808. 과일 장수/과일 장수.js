function solution(k, m, score) {
    if(score.length < m) return 0
    let answer = 0
    let score_box = [...score].sort((a,b) => b - a)
    let idx = 0
    while(idx < parseInt(score.length / m)){
        answer += score_box.slice(m*idx, m*idx + m)[m - 1] * m
        idx++
    }
    return answer;
}