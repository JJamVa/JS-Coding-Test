function solution(myString, pat) {
    let value = 0
    let idx = 0
    while(myString.indexOf(pat,idx) !== -1){
        value = myString.indexOf(pat,idx++)
    }
    return myString.slice(0,value + pat.length);
}