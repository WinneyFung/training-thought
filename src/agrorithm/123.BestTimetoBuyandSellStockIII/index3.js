/**
 * 只能交易两次
 * 与动态规划有关？
 * 
 * 状态方程：
 * 第i天是买状态 = max（i-1是买状态，本次不卖；前面i-1天已经卖出则这次买入price[i]才为买状态）
 * 买状态下的最大值含买入价格
 * buy[i] = max(buy[i-1],sell[i-1]-prices[i])
 * 
 * 第i天是卖出状态 = max(i-1天是卖出状态，本次不买；前i-1天为买状态，这次卖出price[i])
 * sell[i] = max(sell[i-1],buy[i-1]+prices[i])
 * 卖状态下的最大值为纯利润
 * 
 * 由该方程可以推理得；
 * firstBuy =  max(firstBuy[i-1],firstSell[i-1]-prices[i])
 * 由于不存在第一次买入不存在交以，所以
 * 第一次买入最大利润的计算值： firstBuy =  max(firstBuy[i-1],-prices[i])
 * 第一次最大利润的卖出计算值：firstSell =  max(firstSell[i-1],firstBuy[i-1]+prices[i])
 * 
 * 第二次最大利润的买入计算值： secondBuy =  max(secondBuy[i-1],firstSell[i-1]-prices[i])
 * 第二次最大利润的卖出计算值：secondSell =  max(secondSell[i-1],secondBuy[i-1]+prices[i])
 * 
 * Max(第一次最大利润的卖出计算值+第二次最大利润的卖出计算值) = 所求
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  if (!prices.length) {
    return 0
  }

  const l = prices.length
  let firstBuy = []
  let firstSell = []
  let secondBuy = []
  let secondSell = []
  firstBuy[0] = -prices[0]
  firstSell[0] = 0
  secondBuy[0] = 0
  secondSell[0] = 0

  for (let i = 1; i < l; i++) {
    firstBuy[i] = Math.max(firstBuy[i - 1], -prices[i])
    firstSell[i] = Math.max(firstSell[i - 1], firstBuy[i - 1] + prices[i])
    secondBuy[i] = Math.max(secondBuy[i - 1], firstSell[i - 1] - prices[i])
    secondSell[i] = Math.max(secondSell[i - 1], secondBuy[i - 1] + prices[i])
  }
  return secondSell[l - 1]
};

var maxProfit = function (prices) {
  if (!prices.length) {
    return 0
  }

  const l = prices.length
  let firstBuy = -prices[0]
  let firstSell = 0
  let secondBuy = -prices[0]
  let secondSell = 0

  let firstBuyTmp = firstBuy
  let firstSellTmp = firstSell
  let secondBuyTmp = secondBuy
  let secondSellTmp = secondSell


  for (let i = 1; i < l; i++) {
    firstBuy = Math.max(firstBuyTmp, -prices[i])
    firstSell = Math.max(firstSellTmp, firstBuyTmp + prices[i])
    secondBuy = Math.max(secondBuyTmp, firstSellTmp - prices[i])
    secondSell = Math.max(secondSellTmp, secondBuyTmp + prices[i])
    firstBuyTmp = firstBuy
    firstSellTmp = firstSell
    secondBuyTmp = secondBuy
    secondSellTmp = secondSell
  }
  return secondSell
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([3, 3]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]))
console.log(maxProfit([6, 1, 3, 2, 4, 7]))
console.log(maxProfit([2, 6, 8, 7, 8, 7, 9, 4, 1, 2, 4, 5, 8]))