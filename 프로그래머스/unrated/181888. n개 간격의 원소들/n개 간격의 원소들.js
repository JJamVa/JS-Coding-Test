function solution(num_list, n) {
    return num_list
        .map((i,j) => {if(j % n === 0) return i})
        .filter((element) => {return element !== null && element !== undefined});
}