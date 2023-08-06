function solution(array) {
    var count = Array.from({length:Math.max(...array) + 1}).fill(0);
    array.map((e) => {return count[e]++})
    console.log(array)
    var Max_value = count.findIndex(e => e === Math.max(...count))
    count.sort((a,b) => b - a)
    return count[0] === count[1] ? -1 : Max_value
}