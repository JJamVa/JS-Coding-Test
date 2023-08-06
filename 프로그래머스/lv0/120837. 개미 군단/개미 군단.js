function solution(피) {
    var 개미의수 = 0;
    
    for(var 공격력 = 5; 공격력 > 0 ; 공격력-=2){
        개미의수 += parseInt(피 / 공격력);
        피 = parseInt(피 % 공격력);
        console.log(`현재 나의 공격력 : ${공격력}, 현재 개미의 수: ${개미의수}, 남은 피의 수: ${피}`)
    }
    
    return 개미의수;
}