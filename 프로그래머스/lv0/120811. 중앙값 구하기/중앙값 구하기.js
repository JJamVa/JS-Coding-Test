function solution(array) {
    array.sort(function(a,b) {return a - b});
    return array[parseInt(array.length/2)]
}