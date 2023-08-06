function solution(array, n) {
    var answer = 0;
    array.sort()
    var value_array = []
    for(var idx = 0; idx < array.length; idx++){
        value_array.push(Math.abs(array[idx] - n))
        console.log(Math.abs(array[idx] - n))
    }
    var min_value = Math.min(...value_array)
    return array[value_array.indexOf(Math.min(...value_array))]
}