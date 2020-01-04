/**
 * 
 * On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
 * 
 * Once you pay the cost, you can either climb one or two steps. 
 * You need to find minimum cost to reach the top of the floor, 
 * and you can either start from the step with index 0, or the step with index 1.
 * 
 * cost will have a length in the range [2, 1000].
 * Every cost[i] will be an integer in the range [0, 999].
 * 
 *  [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * dp[i]表示从走到第i级楼梯目前用钱最少的
 * dp[i] = Math.min(dp[i-2],dp[i-1]) + cost[i]
 * 
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs2 = function (cost) {
  const dp = []
  dp[0] = 0
  dp[1] = 0
  const l = cost.length

  for (let i = 1; i < l; i++) {
    dp[i + 1] = Math.min(dp[i - 1] + cost[i - 1], dp[i] + cost[i])
  }
  console.log(dp)
  return dp[l]
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))