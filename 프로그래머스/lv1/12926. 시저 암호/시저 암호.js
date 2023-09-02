function solution(s, n) {
    var answer = s.split("").map(e => {
        let code = e.charCodeAt(0) + n % 26
        if(e === " ") return " ";
        else if(e === e.toLowerCase()){
            if(code > 122) code = 96 + (code % 122)
        }else{
            if(code > 90) code = 64 + (code % 90)
        }
        return String.fromCharCode(code)
    });
    return answer.join("");
}