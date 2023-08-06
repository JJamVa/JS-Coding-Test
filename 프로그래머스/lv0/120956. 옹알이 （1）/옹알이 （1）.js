function solution(babbling) {
   return babbling.map(e => e.replace(/aya|ye|woo|ma/g, "")).filter(v => (v==="")).length;
}