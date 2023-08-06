const swap = (arr) => {
    for(var i in arr){
        if(arr[i] === "A") arr[i] = "B"
        else arr[i] = "A"
    }
    return arr
}

function solution(myString, pat) {
    return swap(myString.split("")).join("").includes(pat) ? 1 : 0
}