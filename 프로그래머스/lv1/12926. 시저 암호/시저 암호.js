function solution(s, n) {
    var answer = s.split("").map(e => {
        let code = e.charCodeAt(0) + n % 26
        if(e === " ") return " ";
        else if(e === e.toLowerCase()){
            if(code > "z".charCodeAt(0)){
                code = "a".charCodeAt(0) - 1 + (code % 'z'.charCodeAt(0))
            }
        }else{
            if(code > "Z".charCodeAt(0))
                code = "A".charCodeAt(0) - 1 + (code % 'Z'.charCodeAt(0))
        }
        return String.fromCharCode(code)
    });
    return answer.join("");
}