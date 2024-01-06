function solution(nums) {
    let arr = [];
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                arr.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
    
    return arr.map((e,i) => {
        // if(e < 2) return 0
        for(let i = 2; i < e; i++){
            // console.log(i, e)
            if(e % i === 0) return 0;
        }
        return 1;
    }).reduce((a,b) => a + b, 0)
}