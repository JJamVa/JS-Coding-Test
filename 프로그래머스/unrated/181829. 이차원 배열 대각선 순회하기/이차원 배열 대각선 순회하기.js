function solution(board, k) {
    let result = board.map((e,i) => e.map((x,y) => i + y <= k ? board[i][y] : 0))
    return result.flat().reduce((a,b) => a + b,0)
}