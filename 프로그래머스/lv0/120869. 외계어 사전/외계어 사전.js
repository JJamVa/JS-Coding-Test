function solution(spell, dic) {
    var answer = 0;
    for(var i of dic){
        for(var j of spell){
            if(i.includes(j) === false) break
            if(spell[spell.length - 1] === j && i.includes(j)) return 1
        }
    }
    return 2;
}