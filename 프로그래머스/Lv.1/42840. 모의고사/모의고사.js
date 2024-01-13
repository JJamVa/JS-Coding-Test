function solution(answers) {
    let obj1 = {
        num: 1,
        arr: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
        correct:0
    };
    let obj2 = {        
        num: 2,
        arr: [2, 1, 2, 3, 2, 4, 2, 5],
        correct:0
    }        
    let obj3 = {
        num: 3,
        arr: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
        correct:0
    }

    for(let i = 0; i < answers.length; i++){
        if(obj1.arr[i % obj1.arr.length] === answers[i]) obj1.correct += 1
        if(obj2.arr[i % obj2.arr.length] === answers[i]) obj2.correct += 1
        if(obj3.arr[i % obj3.arr.length] === answers[i]) obj3.correct += 1
    }
    
    let result = [obj1, obj2, obj3].filter(e => Math.max(obj1.correct, obj2.correct, obj3.correct) === e.correct).sort((a,b) => a - b).map((e) => e.num)

    return result;
}