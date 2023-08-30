function solution(sizes) {
    let orderby_arr = [...sizes].map(e => e.sort((a,b) => a - b))
    let row_arr = [...orderby_arr].flat().filter((e,i) => i % 2 === 0).sort((a,b) => b - a)
    let col_arr = [...orderby_arr].flat().filter((e,i) => i % 2 === 1).sort((a,b) => b - a)

    return row_arr[0] * col_arr[0];
}