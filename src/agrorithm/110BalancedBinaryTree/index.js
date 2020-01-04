function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true
  }

  if (Math.abs(getMaxHeight(root.left) - getMaxHeight(root.right)) > 1) {
    return false
  }

  return isBalanced(root.left) && isBalanced(root.right)
};

function getMaxHeight (root) {
  if (!root) {
    return 0
  }

  if (root && !root.left && !root.right) {
    return 1
  }

  return Math.max(getMaxHeight(root.left), getMaxHeight(root.right)) + 1
}


let p = new TreeNode(3)
p.right = new TreeNode(20)
p.left = new TreeNode(9)
p.right.left = new TreeNode(15)
p.right.right = new TreeNode(7)
console.log(isBalanced(p))

// [1,2,2,3,null,null,3,4,null,null,4]
let q = new TreeNode(1)
q.left = new TreeNode(2)
q.left.left = new TreeNode(3)
q.left.left.left = new TreeNode(4)
q.right = new TreeNode(2)
q.right.right = new TreeNode(3)
q.right.right.right = new TreeNode(4)
console.log(isBalanced(q))
