/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 在已排序的数组中到目标的下标或者找到下标对应的
 * 二分查找法
 */
var searchInsert = function (nums, target) {
  const len = nums.length
  /*let midIndex = Number.parseInt((len + 1) / 2)
  let midNum = nums[midIndex] */

  for (let i = 0; i < len; i++) {
    const num = nums[i]

    if (num === target) {
      return i
    }

    if (i === len - 1) {
      if (target > nums[i]) {
        return len
      } else {
        return len - 1
      }
    }

    if (i === 0 && target <= num) {
      return 0
    }

    if (target > num && target < nums[i + 1]) {
      return i + 1
    }

  }
};