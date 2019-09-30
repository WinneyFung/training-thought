
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 这个算法针对需要删除比较多的元素 实际上待删除的元素是不多的
 */
var removeElement = function (nums, val) {
  console.log(nums)
  if (!nums) {
    return
  }

  if (val === null || val === undefined) {
    return
  }

  let i = 0
  let len = nums.length

  for (let j = 0; j < len; j++) {
    let num = nums[j];
    if (num !== val) {
      //  保留原数组元素的方式 使用交换
/*       let temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp */
      //  只保留删除被删除元素后的方式
      nums[i] = nums[j]
      i++
    }
  }
  console.log(nums)
  return i
};

console.log(removeElement([4,4,0,1,0,2],0))
console.log(removeElement([1,1,1],1))
console.log(removeElement([0,1,2,2,3,0,4,2],2))