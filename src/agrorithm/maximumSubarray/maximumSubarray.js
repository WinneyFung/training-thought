/**
 * @param {number[]} nums
 * @return {number}
 * 以数组作为键，值为和，枚举计算值
 */
var maxSubArray = function (nums) {
  let max = nums[0]
  let sum = 0
  nums.forEach(num => {

    if (sum + num <= num) {
      sum = num
    } else {
      sum += num
    }
    max = Math.max(sum, max)
  })

  return max
};

console.log([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(maxSubArray([1]))
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))