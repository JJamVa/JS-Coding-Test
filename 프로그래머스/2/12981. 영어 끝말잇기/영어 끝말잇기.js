function solution(n, words) {
    let store = [words.shift()];
    
    while(words.length !== 0){
        let word = words.shift();
        if(store.includes(word) || store[store.length - 1][store[store.length - 1].length - 1] !== word[0]) 
            return [store.length % n + 1,parseInt(store.length / n) + 1];
        else store.push(word);
    }

    return [0,0];
}