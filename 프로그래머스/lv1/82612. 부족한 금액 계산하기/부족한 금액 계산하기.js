function solution(price, money, count) {
    for(var i = 1; i <= count; i++){
        money -= (i * price)
    }
    return money <= 0 ? Math.abs(money) : 0;
}