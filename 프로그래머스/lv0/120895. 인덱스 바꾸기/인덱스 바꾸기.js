const swap = (arr, n1, n2) => {
    [arr[n1],arr[n2]] = [arr[n2],arr[n1]]
    return arr.join("")
}
function solution(my_string, num1, num2) {
    return swap(my_string.split(""),num1,num2)
}