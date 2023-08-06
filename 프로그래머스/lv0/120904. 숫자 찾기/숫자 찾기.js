const solution = (num,k) => {
    const result = Array.from(String(num)).findIndex(e => e === String(k))
    return result === -1 ? -1 : result + 1
}