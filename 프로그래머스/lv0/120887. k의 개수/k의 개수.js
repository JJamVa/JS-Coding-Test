function solution(i, j, k) {
    var collect = ''
    for(var num = i; num <= j; num++){
        collect += num.toString()
    }
    console.log(collect.split(k.toString()))
    return collect.split(k.toString()).length - 1
}