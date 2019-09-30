
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums) {
    return
  }

  if (val === null || val === undefined) {
    return
  }

  let i = 0
  let n = nums.length

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1]
      n--
    } else {
      i++
    }
  }

  return i
};

console.log(removeElement([4, 4, 0, 1, 0, 2], 0))
console.log(removeElement([1, 1, 1], 1))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))