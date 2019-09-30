/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 在已排序的数组中到目标的下标或者找到下标对应的
 * 二分查找法
 */
var searchInsert = function (nums, target) {
  const len = nums.length
  let r = 0
  let l = len

  if (target <= nums[0]) {
    return 0
  }

  if (target > nums[len - 1]) {
    return len
  }

  while (nums[r] < nums[l - 1]) {
    let m = Number.parseInt((l + r) / 2)

    if (nums[m] === target) {
      return m
    }

    if (target > nums[m] && m + 1 < len && target < nums[m + 1]) {
      return m + 1
    }

    if (target < nums[m] && m - 1 >= 0 && target > nums[m - 1]) {
      return m
    }

    if (nums[m] > target) {
      l = m
    } else {
      r = m
    }

  }
};


console.log(searchInsert([1, 3, 4, 5, 6, 8, 10],5))