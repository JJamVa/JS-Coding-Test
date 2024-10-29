function solution(s) {
    let arr = s.split("");
    let obj = {};
    let value = "";
    
    
    for(let i = 1; i < arr.length; i++){
        if(!isNaN(arr[i - 1])){
            value += arr[i - 1]
            if(isNaN(arr[i])){
                obj[value] ? obj[value] += 1 : obj[value] = 1
                value = ""
            }
        } 
    
    }
    
    let result = Object.entries(obj).sort((a,b) => {
        if(a[1] > b[1]) return -1;
        else return 1;
    }).map((e) => parseInt(e[0]))
    
    
    return result;
}