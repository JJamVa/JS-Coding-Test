function solution(my_string, n) {
    var answer = '';
    for(var index in my_string) answer += my_string[index].repeat(n)
    return answer;
}