/***
 * 
 * buy[j] = max(buy[j],sell[j-1]-prices[i])
 * sell[j] = max(sell[j],buy[j]+prices[i])
 * 
 * warn: 第i天的buy[j]需要用到前一天的sell[j-1]-prices[i],但是我们从j=0开始遍历的话，
 * ？？？？此时得到的sell[j-1]已经变成了第i天的sell[j-1]了？？？？
 * => may be ,cos
 * sell[j-1] = max(sell[j-1],buy[j-1]+prices[i])
 * 
 * !!!从 j = k-1开始遍历到1，那么修改buy[j]和sell[j]之时，就能保证sell[j-1]还是前一天的值!!!
 * 
  * Say you have an array for which the i-th element is the price of a given stock on day i.
  * Design an algorithm to find the maximum profit. You may complete at most k transactions.
  *Note:
  *You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */


/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  //  判断是不是属于无限次交易
  const l = prices.length
  if (k > l / 2) {
    k = Math.round(l / 2)
  }
  const buy = []
  const sell = []

  for (let i = 0; i < l; i++) {
    buy[i] = -prices[i]
    sell[i] = 0
  }

  for (let i = 0; i < l; i++) {
    //  对任意一天开始循环，计算进行k次交易的结果
    buy[0] = Math.max(buy[0], -prices[i])
    //  如果buy[0]取得是当天得，最后等于0，不影响结果，但是逻辑上，不能重复交易
    sell[0] = Math.max(sell[0], buy[0] + prices[i])
    //  从k次交易开始推算到第0次交易
    for (let j = l - 1; j > 0; --j) {
      buy[j] = Math.max(buy[j], sell[j - 1] - prices[i])
      sell[j] = Math.max(sell[j], buy[j] + prices[i])
    }
  }
  return sell[l - 1]
};

console.log(maxProfit(2, [7, 1, 5, 3, 6, 4]))
// console.log(maxProfit(2, [3, 3]))
// console.log(maxProfit(2, [1, 2, 3, 4, 5]))
// console.log(maxProfit(2, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]))
// console.log(maxProfit(2, [6, 1, 3, 2, 4, 7]))
// console.log(maxProfit(2, [2, 6, 8, 7, 8, 7, 9, 4, 1, 2, 4, 5, 8]))