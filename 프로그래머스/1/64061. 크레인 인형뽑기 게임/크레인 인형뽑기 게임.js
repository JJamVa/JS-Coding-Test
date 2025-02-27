function solution(board, moves) {
    let result_stack = []
    let point = 0;
    
    while(moves.length !== 0){
        let value = moves.shift();
        for(let i = 0; i < board.length; i++){
            if(board[i][value - 1] !== 0){
                if(result_stack[result_stack.length - 1] === board[i][value - 1]){
                    result_stack.pop();
                    point += 2;
                }else{
                    result_stack.push(board[i][value - 1])
                }
                board[i][value - 1] = 0
                break;
            }
        }
        
    }
    
    
    return point;
}