function solution(num_list) {
    var [odd_value,even_value] = ["",""];
    for(var i of num_list){
        if(i % 2 === 1) odd_value += String(i)
        else even_value += String(i)
    }
    return parseInt(odd_value) + parseInt(even_value)
}