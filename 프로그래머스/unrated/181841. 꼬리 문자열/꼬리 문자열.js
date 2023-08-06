function solution(str_list, ex) {
    var filter_arr = str_list.filter((element) => {
        return element.includes(ex) === false
    }).join("")
    return filter_arr;
}