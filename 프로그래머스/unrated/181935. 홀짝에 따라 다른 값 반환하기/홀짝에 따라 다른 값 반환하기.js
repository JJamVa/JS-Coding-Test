function solution(n) {
    var arr = Array.from({length:n}, (element,index) => element = index + 1)
    arr = n % 2 === 1 ? 
        arr.filter((element) => element % 2 === 1) : 
        arr.filter((element) => element % 2 === 0).map((element) => element = Math.pow(element,2))
    return arr.reduce((a,b) => a + b)
}