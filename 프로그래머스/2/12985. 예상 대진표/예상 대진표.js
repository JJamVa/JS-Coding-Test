function solution(n,a,b){
    let fight = Array.from({length: n}, (e,i) => (i === a - 1 || i === b - 1) ? true : false);
    
    for(let i = 1; Math.pow(2,i) <= n; i++){
        let idx = 1;
        while(idx * Math.pow(2,i) <= n){
            let check = fight.slice(Math.pow(2,i) * (idx - 1), Math.pow(2,i) * idx);
            if(check.filter((e) => e === true).length === 2) return i;
            idx++;
        }
    }
    // var answer = 0;

    // console.log('Hello Javascript')

    // return answer;
}