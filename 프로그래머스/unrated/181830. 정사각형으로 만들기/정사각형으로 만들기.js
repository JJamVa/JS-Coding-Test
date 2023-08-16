function solution(arr) {
    if(arr.length === arr[0].length) return arr
    else if(arr.length > arr[0].length){
        let i = 0
        while(arr.length !== arr[arr.length - 1].length){
            if(arr[i].length === arr.length) i++
            arr[i].push(0)
        }
    }else{
        while(arr.length !== arr[0].length){
            arr.push(Array(arr[0].length).fill(0))
        }
    }
    return arr;
}