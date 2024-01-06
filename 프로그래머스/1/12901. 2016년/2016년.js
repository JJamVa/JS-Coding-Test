function solution(a, b) {
    let day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let date = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    let idx = ((date.slice(0, a - 1).reduce((a, b) => a + b, 0) + b) % 7 - 1 + 7) % 7;
    
    return day[idx];
}