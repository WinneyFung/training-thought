/**
 * 只能交易两次
 * 思路：取峰值
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const maxs = []
  const vallleys = []
  const peaks = []
  let i = 0
  const l = prices.length
  //  收集峰值
  while (i < l - 1) {
    while (i < l - 1 && prices[i] >= prices[i + 1]) {
      i++
    }
    vallleys.push({ index: i, value: prices[i] })
    while (i < l - 1 && prices[i] <= prices[i + 1]) {
      peaks.push({ index: i, value: prices[i] })
      i++
    }
    peaks.push({ index: i, value: prices[i] })
  }

  //  计算峰峰值
  for (let i = 0, l = vallleys.length; i < l; i++) {
    for (let j = 0, pl = peaks.length; j < pl; j++) {
      let peak = peaks[j]
      let vallley = vallleys[i]
      if (peak.index < vallley.index) {
        continue
      }
      if (peak.value > vallley.value) {
        maxs.push({ valley: vallley.index, peak: peak.index, value: peak.value - vallley.value })
      }
    }
  }

  maxs.sort()

  const results = []

  for (let i = 0, ml = maxs.length; i < ml; i++) {
    const m = maxs[i]
    for (let j = 0; j < ml; j++) {
      const mm = maxs[j]
      if (mm.peak < m.peak || mm.valley < m.peak) {
        continue
      }
      results.push(m.value + mm.value)
    }
    results.push(m.value)
  }

  results.sort((a, b) => (a - b))

  return results[results.length - 1] || 0

};

// console.log(maxProfit([3, 3]))
// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([1, 2, 3, 4, 5]))
// console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]))
// console.log(maxProfit([6, 1, 3, 2, 4, 7]))
console.log(maxProfit([2, 6, 8, 7, 8, 7, 9, 4, 1, 2, 4, 5, 8]))