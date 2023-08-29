function solution(emergency) {
    var count = Array.from({length:emergency.length}).fill(0)
    emergency.filter((e,i) => {
        for(var j of emergency){
            if(e <= j) count[i]++
        }
    })

    return count;
}