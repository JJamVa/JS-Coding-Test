function solution(price) {
  switch (price > 0) {
      case price >= 500000:
          return parseInt(price - (price * 0.2));
      case price >= 300000:
          return parseInt(price - (price * 0.1));
      case price >= 100000:
          return parseInt(price - (price * 0.05));
      default: return price;
      }
}