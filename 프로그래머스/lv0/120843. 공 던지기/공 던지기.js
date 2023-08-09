function solution(numbers, k) {
    return numbers[parseInt((2*k - 2) % numbers.length)];
}