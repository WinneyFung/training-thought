/**
 * 只能交易两次
 * 与动态规划有关？
 * 分两次查找
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const l = prices.length
  let minPrice = prices[0]
  let max = 0
  let firstMax = 0
  for (let i = 1; i < l; i++) {
    minPrice = Math.min(prices[i], minPrice)
    firstMax = Math.max(prices[i] - minPrice, firstMax)
    //  求另外一侧的最大值
    let maxPrice = prices[l - 1]
    let secMax = 0
    for (let j = l - 2; j > i; j--) {
      maxPrice = Math.max(prices[j], maxPrice)
      secMax = Math.max(maxPrice - prices[j], secMax)
    }
    max = Math.max(max, firstMax + secMax)
  }
  return max
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([3, 3]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]))
console.log(maxProfit([6, 1, 3, 2, 4, 7]))
console.log(maxProfit([2, 6, 8, 7, 8, 7, 9, 4, 1, 2, 4, 5, 8]))