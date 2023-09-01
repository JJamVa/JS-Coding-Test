function solution(arr, queries) {
    var answer = queries.map((e,i) => {
        for(var i = e[0]; i <= e[1]; i++){
            if(i % e[2] === 0) arr[i]++
        }
    })
    return arr;
}