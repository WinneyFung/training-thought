/**
 * 
 * 
 * 贪心算法
 * 把问题分解成一个个小问题，每个小问题的最优解就是该问题的最优解
 * 分割成小问题的判断： 数据开始下降的点
 * 坑： 给出来的价格就是一个递增的过程，不用分解成子问题，就是一个问题
 * 小问题找出最优解的解法： 按照121的解法分为两种：
 * 1. 暴力枚举
 * 2. 总是记录最大值，当遇到一个值比当前记录的最小值还要小的时候，以这个最小值求得最优解
 * 
 * 
 * i等于l-1，最后一个元素时
 * 刚好被单独分成一组
 * 刚好归入上一组
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  let begin = 0
  let end = 0
  let max = 0
  for (let i = 0, l = prices.length; i < l - 1; i++) {
    let price = prices[i]
    let nextPrice = prices[i + 1]

    if (price > nextPrice) {
      end = i
      max += getMaxProfit(prices, begin, end)
      begin = end + 1
    } else if (i === l - 2) {
      end = l - 1
      max += getMaxProfit(prices, begin, end)
    }

  }

  return max
};

function getMaxProfit (prices, begin, end) {
  return prices[end] - prices[begin]
}

/**
 * 
 * Approach 2: Peak Valley Approach
 * 
 * 不管怎么样，开始总是在低谷买入
 * 然后找到这个低谷的上升的顶点入卖出
 * 
 * @param {*} prices 
 */
function maxProfit1 (prices) {
  let peak = prices[0]
  let valley = prices[0]
  let i = 0
  let l = prices.length
  let max = 0
  while (i < l - 1) {
    while (i < l - 1 && prices[i] >= prices[i + 1]) {
      i++
    }
    valley = prices[i]

    while (i < l - 1 && prices[i] <= prices[i + 1]) {
      i++
    }
    peak = prices[i]
    max += peak - valley
  }
  return max
}

/**
 * 
 * Approach 3: Simple One Pass
 * 
 * 逻辑和方法2一致
 * 弱化了山顶和谷底的概念，加重了过程
 * 
 * @param {*} prices 
 */
function maxProfit (prices) {
  let max = 0
  for (let i = 1, l = prices.length; i < l; i++) {
    if (prices[i] > prices[i - 1]) {
      max += (prices[i] - prices[i - 1])
    }
  }
  return max
}

console.log(maxProfit([3, 3]))
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([6, 1, 3, 2, 4, 7]))