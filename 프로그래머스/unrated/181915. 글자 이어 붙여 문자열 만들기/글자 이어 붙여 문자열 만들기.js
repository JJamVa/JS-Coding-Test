function solution(my_string, index_list) {
    var answer = index_list.map((element,index) => {
        return my_string[element]
    });
    return answer.join("");
}