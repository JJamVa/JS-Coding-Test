function solution(arr1, arr2) {
    var answer = arr1.map((e,i) => e.map((v,idx) => v + arr2[i][idx]))
    return answer;
}