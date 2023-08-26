function solution(dots) {
    let dot_arr1 = [
        [dots[0][0] - dots[1][0], dots[0][1] - dots[1][1]],
        [dots[0][0] - dots[2][0], dots[0][1] - dots[2][1]],
        [dots[0][0] - dots[3][0], dots[0][1] - dots[3][1]]
    ]
    let dot_arr2 = [
        [dots[2][0] - dots[3][0], dots[2][1] - dots[3][1]],
        [dots[1][0] - dots[3][0], dots[1][1] - dots[3][1]],
        [dots[1][0] - dots[2][0], dots[1][1] - dots[2][1]]
    ]

    for(var i = 0; i < dot_arr1.length; i++){
        if((dot_arr1[i][0] / dot_arr1[i][1]) === (dot_arr2[i][0]/dot_arr2[i][1])) return 1
    }
    return 0;
}