
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {

  return getHeight(root)
};

function getHeight (root) {
  if (!root) {
    return 0
  }

  if (root.left && !root.right) {
    return getHeight(root.left) + 1
  }

  if (root.right && !root.left) {
    return getHeight(root.right) + 1
  }

  return Math.min(getHeight(root.left) + 1, getHeight(root.right) + 1)
}


let p = new TreeNode(3)
p.right = new TreeNode(20)
p.left = new TreeNode(9)
p.right.left = new TreeNode(15)
p.right.right = new TreeNode(7)
console.log(minDepth(p))


let q = new TreeNode(1)
q.right = new TreeNode(3)
q.left = new TreeNode(2)
q.right.right = new TreeNode(5)
q.left.left = new TreeNode(4)
console.log(minDepth(q))