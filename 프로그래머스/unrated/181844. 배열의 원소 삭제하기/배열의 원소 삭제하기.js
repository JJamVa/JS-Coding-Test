function solution(arr, delete_list) {
    var answer = arr.filter((element) => {
        return !delete_list.includes(element)
    });
    return answer;
}