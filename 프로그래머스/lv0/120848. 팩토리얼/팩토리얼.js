function solution(n) {
  let answer = 1;
  let acc = 1;
  for (let i = 1; ; i++) {
    acc *= i;
    if (acc > n) {
      answer = i - 1;
      break;
    }
    answer = i;
  }
  return answer;
}