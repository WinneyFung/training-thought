function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false
  }

  if (root && !root.right && !root.left && root.val === sum) {
    return true
  }

  return checkHasPathSum(root.right, sum, root.val) || checkHasPathSum(root.left, sum, root.val)
};

function checkHasPathSum (root, sum, tempSum) {
  if (!root) {
    return false
  }

  tempSum += root.val
  if (tempSum === sum && !root.right && !root.left) {
    return true
  }

  return checkHasPathSum(root.left, sum, tempSum) || checkHasPathSum(root.right, sum, tempSum)
}

let p = new TreeNode(5)
p.right = new TreeNode(8)
p.right.right = new TreeNode(4)
p.right.left = new TreeNode(13)
p.right.right.right = new TreeNode(1)

p.left = new TreeNode(4)
p.left.left = new TreeNode(11)
p.left.left.left = new TreeNode(7)
p.left.left.right = new TreeNode(2)
console.log(hasPathSum(p, 22))

/* p = new TreeNode(1)
p.right = new TreeNode(-3)
p.right.left = new TreeNode(-2)

p.left = new TreeNode(-2)
p.left.left = new TreeNode(1)
p.left.right = new TreeNode(3)
p.left.left.left = new TreeNode(-1) */

p = new TreeNode(5)
p.right = new TreeNode(8)
p.right.right = new TreeNode(4)
p.right.right.right = new TreeNode(1)
p.right.left = new TreeNode(13)

p.left = new TreeNode(-2)
p.left.left = new TreeNode(1)
p.left.right = new TreeNode(3)
p.left.left.left = new TreeNode(-1)
console.log(hasPathSum(p, 26))