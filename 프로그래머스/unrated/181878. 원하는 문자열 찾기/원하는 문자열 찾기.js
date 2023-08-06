function solution(myString, pat) {
    return myString.toLowerCase().split(pat.toLowerCase()).length > 1 ? 1 : 0;
}