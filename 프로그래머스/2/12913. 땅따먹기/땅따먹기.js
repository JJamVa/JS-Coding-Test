function solution(land) {
    let check = [...land[0]];

    for(let i = 1; i < land.length; i++){
        const prev = [...check]
        for(let j = 0; j < land[i].length; j++){
            check[j] = land[i][j] + Math.max(...prev.filter((_,idx) => idx !== j))
        }
    }
    return Math.max(...check)
}