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

  let isRight = false
  let isLleft = false
  if (root.right) {
    isRight = checkHasPathSum(root.right, sum, root.val + root.right.val)
  }
  if (root.left) {
    isLleft = checkHasPathSum(root.left, sum, root.val + root.left.val)
  }

  return isRight || isLleft
};

function checkHasPathSum (root, sum, tempSum) {
  let isRight = false
  let isLleft = false

  if (root && !root.right && !root.left && tempSum === sum) {
    return true
  }

  if (root.right) {
    rightSum = calculSum(root.right, tempSum)
    isRight = checkHasPathSum(root.right, sum, rightSum)
  }
  if (root.left) {
    leftSum = calculSum(root.left, tempSum)
    isLleft = checkHasPathSum(root.left, sum, leftSum)
  }

  return isRight || isLleft
}

function calculSum (root, sum) {

  return root ? sum + root.val : sum
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