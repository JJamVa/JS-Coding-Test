function solution(cacheSize, cities) {
    cities = [...cities].map(e => e.toLowerCase())
    let [hit, miss] = [0,0]
    let lru = []
    
    if(cacheSize === 0) return cities.length * 5
    
    for(let i = 0; i < cities.length; i++){
        if(lru.length < cacheSize && !lru.includes(cities[i])){
            miss++;
        }else{
            if(lru.includes(cities[i])) {
                lru = lru.filter(e => e !== cities[i])
                hit++;
            }else{
                lru.shift();
                miss++;
            }
        }
        lru.push(cities[i]);
    }
    return hit + miss * 5;
}