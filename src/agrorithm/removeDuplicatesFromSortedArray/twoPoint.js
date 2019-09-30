/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums) {
    return 0
  }

  let index = 0
  const len = nums.length

  for (let i = 1; i < len; i++) {
    if (nums[index] != nums[i]) {
      index++
      nums[index] = nums[i]
    }
  }
  
  return index + 1
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1, 3, 2]))
console.log(removeDuplicates([1, 1, 2]))