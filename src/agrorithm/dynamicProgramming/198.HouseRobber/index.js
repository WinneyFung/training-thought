/**
 * 一开始的想法是：
 * 要么抢基数的，要么抢偶数的
 * 
 * 自己举的反例： 
 * [2,7,18,22,33,20,44]
 * dp[i]表示抢劫了第i+1间房子获得的最大利润
 * dp[i] = nums[i] + max(dp[i-2],dp[i-3])
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function (nums) {
  if (!nums || !nums.length) {
    return 0
  }
  const l = nums.length
  if (l <= 2) {
    return nums[1] ? Math.max(nums[0], nums[1]) : nums[0]
  }
  const dp = []
  dp[0] = nums[0]
  dp[1] = nums[1]
  dp[2] = nums[2] + nums[0]
  for (let i = 3; i < l; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 2], dp[i - 3])
  }
  return Math.max(dp[l - 1], dp[l - 2])
};

/**
 * 一开始的想法是：
 * 要么抢基数的，要么抢偶数的
 * 
 * 自己举的反例： 
 * [2,7,18,22,33,20,44]
 * 
 * nums[i]表示抢劫第i间房子获取的金额
 * 思路：
 * dp[i][j]表示抢劫到第i+1间房子时，已经抢劫了j间房子获取的最大利润
 * dp[i][j] = max(dp[i-1][j],dp[i-2][j-1]+nums[i])
 * dp[0][0] = 0
 * dp[1][0] = 0
 * dp[1][1] = max(dp[0][1],dp[0][0]+ nums[1])
 * 
 * 
 * 
 * dp[i]表示表示抢劫到第i+1间房子时，已经抢劫了j间房子获取的最大利润
 * dp[i] = max(dp[i-1],dp[i-2]+nums[i])
 * 表示抢劫到第i间房子时，已经抢劫了j间房子获得的最大利润  = max（
 * 抢劫到第【i-1】间房子，已经抢劫了j间房子的利润 ，
 * 抢劫到【i-2】间房子已经抢劫了j-1间房子的利润+抢劫当前房子的利润
 * ）
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || !nums.length) {
    return 0
  }
  if (nums <= 2) {
    return nums[1] ? Math.max(nums[0], nums[1]) : nums[0]
  }
  const l = nums.length
  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < l; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[l - 1]
};
console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([2, 1, 1, 2]))
console.log(rob([1, 3, 1, 3, 100]))
console.log(rob([1, 2, 3, 1]))
console.log(rob([1, 2]))
console.log(rob( [2,7,18,22,33,20,44]))