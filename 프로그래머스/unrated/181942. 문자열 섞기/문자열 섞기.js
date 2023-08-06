function solution(str1, str2) {
    return Array.from(str1.concat(str2)).map((element,index) =>{
        if(index % 2 === 0){
            return str1[parseInt(index / 2)]
        }else{
            return str2[parseInt(index / 2)]
        }
    }).join("");
}