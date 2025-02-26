function solution(arr1, arr2) {
    let left_array = undefined;
    let right_array = undefined;
    let check = arr1[0].length === arr2.length
    
    if(arr1[0].length === arr2.length){
        left_array = [...arr1]
        right_array = [...arr2]
    }else{
        left_array = [...arr2]
        right_array = [...arr1]
    }
    
    let array = Array.from({length: left_array.length}, 
                           () => Array.from({length: right_array[0].length})
                           .fill(0))
    
    for(let i = 0; i < left_array.length; i++){
        for(let j = 0; j < right_array[0].length; j++){
            for(let k = 0; k < right_array.length; k++){
                array[i][j] += (left_array[i][k] * right_array[k][j]) 
            }
        }
    }
    
    
    
    return array;
}