function solution(num_list) {
    var v = num_list.length - 1
    num_list[v - 1] < num_list[v] ? 
        num_list.push(num_list[v] - num_list[v - 1]) :
        num_list.push(2 * num_list[v])
    return num_list
}