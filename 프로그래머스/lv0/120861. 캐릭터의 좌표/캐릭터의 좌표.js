function solution(keyinput, board) {
    var current = [0,0];
    var max_board = board.map(e => parseInt(e/2))
    for(var i of keyinput){
        switch(i){
            case 'left':
                if(-max_board[0] === current[0]) break;
                current[0] -= 1;
                break;
            case 'right':
                if(max_board[0] === current[0]) break;
                current[0] += 1;
                break;
            case 'up':
                if(max_board[1] === current[1]) break;
                current[1] += 1;
                break;
            case 'down':
                if(-max_board[1] === current[1]) break;
                current[1] -= 1;
                break;
        }     
    }
    return current;
}