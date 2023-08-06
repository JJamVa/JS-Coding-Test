function solution(num_list, n) {
    for(var i of num_list){
        if(i === n) return 1
    }
    return 0
}