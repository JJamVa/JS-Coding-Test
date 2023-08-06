function solution(num_list, n) {
    var [slice_arr1,slice_arr2] = [num_list.slice(0,n), num_list.slice(n,num_list.length)]
    return slice_arr2.concat(slice_arr1);
}