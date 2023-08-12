function solution(arr, intervals) {
    var answer = [];
    for(var i in intervals){
        answer.push([...arr].splice(intervals[i][0], intervals[i][1] - intervals[i][0] + 1))
    }
    return answer.flat(Infinity);
}