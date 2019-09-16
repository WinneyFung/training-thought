/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums) {
    return 0
  }
  let temp = nums[0]
  let len = nums.length
  let index = 1

  for (let i = 1; i < len; i++) {
    const n = nums[index];
    if (n != temp) {
      len++
      temp = n
      index++
    } else {
      nums.splice(index,1)
    }
  }
  return nums && nums.length
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1, 1, 2]))