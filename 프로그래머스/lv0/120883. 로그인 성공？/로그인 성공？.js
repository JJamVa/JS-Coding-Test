function solution(id_pw, db) {
    var [id_check, pw_check] = [false,false];
    for(var i = 0; i < db.length; i++){
        if(id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) return 'login';
        else if(id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]){
            id_check = true;
        }
    }
    return id_check === true ? 'wrong pw' : "fail";
}