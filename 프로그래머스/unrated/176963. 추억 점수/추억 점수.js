function solution(name, yearning, photo) {

    var answer = photo.map(e => e.map((x,i) =>{
        if(name.includes(x)) return yearning[name.findIndex(e => e === x)]
        else return 0
    }).reduce((a,b) => a + b, 0))
    return answer.flat();
}