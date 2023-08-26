function solution(board) {
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){
            if(board[i][j] === 1){
                if(i > 0) board[i - 1][j] !== 1 ? board[i - 1][j] = -1 :  board[i - 1][j] === 1
                if(i < board[i].length - 1) board[i + 1][j] !== 1 ? board[i + 1][j] = -1 : board[i + 1][j] = 1
                if(j > 0) board[i][j - 1] !== 1 ? board[i][j - 1] = -1 : board[i][j - 1] = 1
                if(j < board[i].length - 1) board[i][j+1] !== 1 ? board[i][j+1] = -1 : board[i][j+1] = 1
                if(i > 0 && j > 0) board[i - 1][j - 1] !== 1 ? board[i - 1][j - 1] = -1 : board[i - 1][j - 1] = 1
                if(i > 0 && j < board[i].length - 1) board[i - 1][j + 1] !== 1 ? board[i - 1][j + 1] = -1 : board[i - 1][j + 1] = 1
                if(i < board[i].length - 1 && j < board[i].length - 1) board[i + 1][j + 1] !== 1 ? board[i + 1][j + 1] = -1 : board[i + 1][j + 1] = 1
                if(i < board[i].length - 1 && j > 0) board[i + 1][j - 1] !== 1 ? board[i + 1][j - 1] = -1 : board[i + 1][j - 1] = 1 
            }
        }
    }
    return board.flat().filter(e => e === 0).length;
}