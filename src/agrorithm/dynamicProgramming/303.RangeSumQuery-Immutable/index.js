/**
 * Given an integer array nums, 
 * find the sum of the elements 
 * between indices i and j (i ≤ j), inclusive.
 * 
 * dp[i][j]表示从i开始到j结束，求和的值
 * @param {number[]} nums
 */
var NumArray2 = function (nums) {
  this.nums = nums
  const dp = []
  const l = nums.length

  for (let i = 0; i < l; i++) {
    const num = nums[i]
    let jArr = []
    jArr[i] = num
    dp[i] = jArr
    for (let j = i + 1; j < l; j++) {
      dp[i][j] = dp[i][j - 1] + nums[j]
    }
  }
  this.dp = dp
};

/**
 * Given an integer array nums, 
 * find the sum of the elements 
 * between indices i and j (i ≤ j), inclusive.
 * 
 * dp[i][j]表示从i开始到j结束，求和的值
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums
  const dp = []
  const l = nums.length
  dp[0] = nums[0]
  for (let i = 1; i < l; i++) {
    dp[i] = dp[i - 1] + nums[i]
  }
  this.dp = dp
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  // console.log(this.dp)
  if (i === j) {
    return this.nums[i]
  }
  return this.dp[j] - this.dp[i] + this.nums[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
var obj = new NumArray([-2, 0, 3, -5, 2, -1])
// obj = new NumArray([2, 0, 3, 5, 2, 1])
console.log(obj.sumRange(0, 2)) //1 5
console.log(obj.sumRange(2, 5)) //-1  11
console.log(obj.sumRange(0, 5)) //-3  13
