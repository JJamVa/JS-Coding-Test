function solution(s) {
    let answer = s.split(" ")
                  .map((e,i) => e.split("")
                  .map((element,index) => index % 2 === 0 ? element.toUpperCase() : element.toLowerCase())
                  .join(""))
                  .join(" ")
    return answer;
}