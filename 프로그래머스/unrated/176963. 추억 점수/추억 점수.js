function solution(name, yearning, photo) {
    var answer = photo.map(e => e.map((x,i) =>{
        return name.includes(x) ? yearning[name.findIndex(e => e === x)] : 0
    }).reduce((a,b) => a + b, 0))
    return answer.flat();
}