/**
 * @param {number} x
 * @return {number}
 */
var mySqrt1 = function (x) {
  const res = Math.sqrt(x)
  return Math.floor(res)
};

/**
 * 使用二分法
 * 可以利用binary search 来做，首先找到一个范围，不需要是从0 到 x。因为 sqrt(x) 一定是小于等于 x / 2 + 1的
 * 所以起始范围为 0  到  x / 2 + 1
 * 还要注意 sq = mid * mid。 这里要检查 overflow。
 * @param {*} x 
 */
var mySqrt = function (x) {
  let left = 0
  let right = x / 2 + 1
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    let sq = mid * mid
    if (sq === x) {
      return mid
    } else if (sq < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
};

console.log(mySqrt(8))