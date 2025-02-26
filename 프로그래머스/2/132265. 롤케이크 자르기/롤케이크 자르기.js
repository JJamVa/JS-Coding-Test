function solution(topping) {
    let count = 0;
    let left = new Map()
    let right = new Map()
    
    for(let i = 0; i < topping.length; i++){
        if(i === 0){
            left.set(topping[i],1)
        }else{
            if(right.get(topping[i])){
                right.set(topping[i], right.get(topping[i]) + 1)
            }else{
                right.set(topping[i],1)
            }
        }
    }
    
    for(let j = 1; j < topping.length; j++){
        if(left.size === right.size) count++
        if(left.get(topping[j])){
            left.set(topping[j], left.get(topping[j]) + 1)
        }else{
            left.set(topping[j], 1)
        }
        
        if(right.get(topping[j]) === 1){
            right.delete(topping[j])
        }else{
            right.set(topping[j], right.get(topping[j]) - 1)
        }
        
    }
    
    return count;
}