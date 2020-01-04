
/**
  * Say you have an array for which the ith element is the price of a given stock on day i.
  * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit
  * Note that you cannot sell a stock before you buy one.
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  const l = prices.length
  let max = 0
  for (let i = 0; i < l; i++) {
    const buyp = prices[i];
    for (let j = i + 1; j < l; j++) {
      const sellp = prices[j];
      max = Math.max(sellp - buyp, max)
    }
  }
  return max
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minBuyP = prices[0]
  let maxPF = 0
  const l = prices.length
  for (let i = 1; i < l; i++) {
    const profit = prices[i] - minBuyP
    if (profit > maxPF) {
      maxPF = profit
    }
    if (minBuyP > prices[i]) {
      minBuyP = prices[i]
    }
  }
  return maxPF
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))