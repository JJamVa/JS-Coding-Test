function solution(numer1, denom1, numer2, denom2) {
    var arr = [numer1*denom2 + denom1*numer2, denom1*denom2]
    var GCD = 1
    for(var i = 1; i <= Math.min(...arr); i++){
        if(arr[0] % i === 0 && arr[1] % i === 0) GCD = i
    }
    return [arr[0]/GCD, arr[1]/GCD];
}