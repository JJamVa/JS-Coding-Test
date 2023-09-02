function solution(n, arr1, arr2) {
    let binary = arr1.map((e,i) => e | arr2[i])
                     .map(e => e.toString(2).replace(/1/g,"#").replace(/0/g," "))
                     .map(e =>{
                         while(e.length < n){
                             e = " " + e
                         }
                         return e
                     })
    return binary;
}