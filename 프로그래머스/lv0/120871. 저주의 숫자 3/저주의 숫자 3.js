function solution(n) {
    let value = 1
    for(let count = 1; count <= n; count++,value++){
        while(value.toString().includes("3") || value % 3 === 0) value++;
        console.log(count,value)
    }
    return value -1;
}