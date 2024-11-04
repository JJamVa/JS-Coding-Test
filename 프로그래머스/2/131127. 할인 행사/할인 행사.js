function solution(want, number, discount) {
    let day = 0;
    while(discount.length >= 10){
        let copy_discount = discount.slice(0, 10);
        let copy_number = [...number];
        
        for(let i = 0; i < copy_discount.length; i++){
            let value = copy_discount[i];
            let idx = want.findIndex((e) => e === value);
            if(idx !== -1 && copy_number[idx] > 0){
                copy_number[idx]--;
            }else break;
        }
        if(copy_number.reduce((a,b) => a + b, 0) === 0) {
            day++;
        }
        discount.shift();
    }
    
    return day;
}