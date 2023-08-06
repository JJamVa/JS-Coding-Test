const swap = (arr, queries) => {
    var tmp = arr[queries[0]]
    arr[queries[0]] = arr[queries[1]]
    arr[queries[1]] = tmp
    return arr
}

function solution(arr, queries) {
    for(var i in queries){
        swap(arr,queries[i])
    }
    return arr;
}