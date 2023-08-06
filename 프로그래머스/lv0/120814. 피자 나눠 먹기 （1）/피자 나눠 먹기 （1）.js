const solution = (n) => {
    var y = n % 7 === 0 ? parseInt(n/7) : parseInt(n/7) + 1
    return y;
}