function solution(myString, pat) {
    var answer = 0;
    for(var i = 0; i + pat.length <= myString.length; i++){
        if(myString.substr(i,pat.length).includes(pat)) answer++
    }
    return answer;
}