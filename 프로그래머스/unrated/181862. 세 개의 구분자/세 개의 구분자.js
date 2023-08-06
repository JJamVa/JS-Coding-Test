function solution(myStr) {
    var arr = myStr.split(/[abc]/).filter((element) => {return element !== ""})
    return arr.length !== 0 ? arr : ["EMPTY"]
}