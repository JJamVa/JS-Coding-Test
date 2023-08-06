function solution(ineq, eq, n, m) {
    var menu = {">" : ">",
               "<":"<",
                "=":"=",
               "!" : ""}
    return eval(`${n} ${menu[ineq]}${menu[eq]} ${m}`) === true ? 1 : 0;
}