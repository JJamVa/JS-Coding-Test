function solution(a, b) {
    let date = new Date(2016, a-1, b);
    let day = date.getDay();
    
    return day === 0 ? "SUN" 
            : day === 1 ? "MON"
            : day === 2 ? "TUE"
            : day === 3 ? "WED"
            : day === 4 ? "THU"
            : day === 5 ? "FRI"
            : day === 6 ? "SAT"
            : "Error"
}