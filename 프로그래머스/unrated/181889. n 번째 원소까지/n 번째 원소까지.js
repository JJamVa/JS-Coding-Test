function solution(num_list, n) {
    console.log(typeof(num_list.join("")))
    return num_list.join("").substr(0,n).split("").map(Number);
}