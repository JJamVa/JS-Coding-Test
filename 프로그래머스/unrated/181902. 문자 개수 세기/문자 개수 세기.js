function solution(my_string) {
    let [lower_count,upper_count]= [[],[]]
    for(let i = 65; i <= 90; i++){
        upper_count.push(my_string.split(String.fromCharCode(i)).length - 1)
        lower_count.push(my_string.split(String.fromCharCode(i + 32)).length - 1)
    }
    return upper_count.concat(lower_count);
}