function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return sortedArrToBST(nums, 0, nums.length - 1)
};

function sortedArrToBST1 (nums, start, end) {
  if (!nums || !nums.length) {
    return null
  }

  if (end - start === 0) {
    return new TreeNode(nums[end])
  }

  if (end - start === 1) {
    const root = new TreeNode(nums[end])
    root.left = new TreeNode(nums[start])
    return root
  }

  if (end - start === 2) {
    const root = new TreeNode(nums[start + 1])
    root.left = new TreeNode(nums[start])
    root.right = new TreeNode(nums[end])
    return root
  }

  const mid = Math.round((end + start) / 2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArrToBST(nums, start, mid - 1)
  root.right = sortedArrToBST(nums, mid + 1, end)

  return root
}

function sortedArrToBST (nums, start, end) {
  if (!nums || !nums.length) {
    return null
  }

  if (start > end) {
    return null
  }

  const mid = Math.round((end + start) / 2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArrToBST(nums, start, mid - 1)
  root.right = sortedArrToBST(nums, mid + 1, end)

  return root
}

const arr = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(arr))