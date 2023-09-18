function solution(sizes) {
    let orderby_arr = [...sizes].map(e => e.sort((a,b) => a - b))
    let row_arr = [...orderby_arr].flat().filter((e,i) => i % 2 === 0)
    let col_arr = [...orderby_arr].flat().filter((e,i) => i % 2 === 1)

    return Math.max(...row_arr) * Math.max(...col_arr);
}