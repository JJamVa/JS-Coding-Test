function solution(my_string, s, e) {
    var answer = '';
    var sub_str = my_string.slice(s, e+1).split("").reverse().join("")
    return my_string.split(my_string.slice(s,e+1)).join(sub_str)
}