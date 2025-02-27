function solution(friends, gifts) {
    let user = new Map();
    let user_state = new Map();
    let next_gift = new Map();
    
    // 누가 누구에게 줬는지 전체 gifts
    while(gifts.length !== 0){
        let value = gifts.shift().split(" ");
        
        if(!user.has(value[0])){
            user.set(value[0], new Map());
        }
        
        let info = user.get(value[0])
        info.set(value[1], info.get(value[1]) ? info.get(value[1]) + 1 : 1);
        user_state.set(value[0], user_state.get(value[0]) ? user_state.get(value[0]) + 1 : 1)
        user_state.set(value[1], user_state.get(value[1]) ? user_state.get(value[1]) - 1 : - 1)
    }
    
    // 선물 주고 받는거 조회 많이 받은애가 적게 준애한테 주기
    for(let i = 0; i < friends.length; i++){
        for(let j = i + 1; j < friends.length; j++){
            let friend_A = friends[i];
            let friend_B = friends[j];
            
            let value1 = user.get(friend_A)?.get(friend_B) || 0
            let value2 = user.get(friend_B)?.get(friend_A) || 0
            
            if(value1 === value2){
                let gift_A = user_state.get(friend_A) || 0;
                let gift_B = user_state.get(friend_B) || 0;
                
                if(gift_A !== gift_B){
                    gift_A > gift_B 
                        ? next_gift.set(friend_A, next_gift.get(friend_A) ? next_gift.get(friend_A) + 1 : 1)
                        : next_gift.set(friend_B, next_gift.get(friend_B) ? next_gift.get(friend_B) + 1 : 1)
                }
            }else if(value1 > value2){
                next_gift.set(friend_A, next_gift.get(friend_A) ? next_gift.get(friend_A) + 1 : 1)
            }else{
                next_gift.set(friend_B, next_gift.get(friend_B) ? next_gift.get(friend_B) + 1 : 1)
            }
        }
    }
    
    return next_gift.size ? Math.max(...next_gift.values()) : 0;
}