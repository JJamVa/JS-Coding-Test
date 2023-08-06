function solution(num_list) {
    var [mul, add] = [1, 0];
    for(var i of num_list){
        mul *= i
        add += i
    }
    return mul < Math.pow(add,2) ? 1 : 0;
}