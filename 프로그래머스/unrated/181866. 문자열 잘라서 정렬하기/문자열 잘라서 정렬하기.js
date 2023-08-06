function solution(myString) {
    return myString.split("x").filter((element) => {return element !== ""}).sort();
}