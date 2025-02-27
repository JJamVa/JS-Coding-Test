function solution(friends, gifts) {
    let user = new Map();
    let user_state = new Map();
    let next_gift = new Map();

    // 1. 모든 친구를 초기화
    for (let friend of friends) {
        user.set(friend, new Map());
        user_state.set(friend, 0);
        next_gift.set(friend, 0);
    }

    // 2. 선물 기록 저장 및 선물 지수 계산
    for (let gift of gifts) {
        let [giver, receiver] = gift.split(" ");

        // (1) 누가 누구에게 줬는지 기록
        user.get(giver).set(receiver, (user.get(giver).get(receiver) || 0) + 1);

        // (2) 선물 지수 업데이트 (준 선물 +1, 받은 선물 -1)
        user_state.set(giver, user_state.get(giver) + 1);
        user_state.set(receiver, user_state.get(receiver) - 1);
    }

    // 3. 친구 쌍을 비교하여 추가 선물 계산
    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            let friend_A = friends[i];
            let friend_B = friends[j];

            let value1 = user.get(friend_A)?.get(friend_B) || 0;
            let value2 = user.get(friend_B)?.get(friend_A) || 0;

            if (value1 === value2) {
                let gift_A = user_state.get(friend_A) || 0;
                let gift_B = user_state.get(friend_B) || 0;

                if (gift_A !== gift_B) {
                    let receiver = gift_A > gift_B ? friend_A : friend_B;
                    next_gift.set(receiver, next_gift.get(receiver) + 1);
                }
            } else {
                let receiver = value1 > value2 ? friend_A : friend_B;
                next_gift.set(receiver, next_gift.get(receiver) + 1);
            }
        }
    }

    return Math.max(...next_gift.values());
}

