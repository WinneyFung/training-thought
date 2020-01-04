/**
 * @param {number} n
 * @return {number}
 */
var climbStairs1 = function (n) {
  if (n <= 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  if (n === 3) {
    return 3
  }
  return 2 * climbStairs(n - 2) + climbStairs(n - 3)
  // return climbStairs(n - 1) + climbStairs(n - 2)
};

var climbStairs = function (n) {
  const deep = []
  deep[1] = 1
  deep[2] = 2
  deep[3] = 3
  for (let i = 4; i <= n; i++) {
    deep[i] = 2 * deep[i - 2] + deep[i - 3]
  }
  return deep[n]
};

console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(43))