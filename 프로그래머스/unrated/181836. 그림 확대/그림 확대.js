function solution(picture, k) {
    var answer = picture.map(e => e.split("").map(x => x.repeat(k)).join(""))
    return Array.from({length: picture.length*k}, (e,i) => answer[parseInt(i/k)] );
}