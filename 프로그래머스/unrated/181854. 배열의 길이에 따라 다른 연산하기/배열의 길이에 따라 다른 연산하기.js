function solution(arr, n) {
    return arr.length % 2 === 1 ?
    arr.map((element,index) => {
        if(index % 2 === 0)
            return element + n
        return element
    }) :
    arr.map((element,index) => {
        if(index % 2 === 1)
            return element + n
        return element
    }) 
}