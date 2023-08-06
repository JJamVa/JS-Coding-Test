function solution(A, B) {
    var [A_array, B_array] = [A.split(""),  B.split("")]
    for(var idx = 0; idx < B.length; idx++){
        if(B_array.join("") === A_array.join("")) return idx
        A_array.unshift(A_array.pop())
    }
    return -1;
}