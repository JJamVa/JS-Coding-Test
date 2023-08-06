function solution(strArr) {
    return strArr.map((element,index) => {
        if(index % 2 === 1){
            return element.toUpperCase()
        }
        return element.toLowerCase()
    })
}