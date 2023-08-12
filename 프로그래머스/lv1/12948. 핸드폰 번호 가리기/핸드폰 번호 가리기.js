function solution(phone_number) {
    var answer = phone_number.substring(0, phone_number.length - 4)
    return phone_number.replace(answer,"*".repeat(answer.length));
}