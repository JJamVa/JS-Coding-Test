function solution(want, number, discount) {
    let day = 0;
    for(let i = 0; i <= discount.length - 10; i++){
        let copy_discount = [...discount].slice(i, i + 10);
        let copy_number = [...number];
        
        for(let j = 0; j < copy_discount.length; j++){
            let value = copy_discount[j];
            let idx = want.findIndex((e) => e === value);
            if(idx !== -1 && copy_number[idx] > 0){
                copy_number[idx]--;
            }else break;
        }
        if(copy_number.reduce((a,b) => a + b, 0) === 0) {
            day++;
        }
    }
    
    return day;
}