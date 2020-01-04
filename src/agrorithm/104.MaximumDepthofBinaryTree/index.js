function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  return getDeepList(root)
};

function getDeepWithLoop (root) {
  //  循环计算loop
  
}

function getDeepList (root) {
  if (!root) {
    return 0
  }
  return Math.max(getDeepList(root.left), getDeepList(root.right)) + 1
}


let p = new TreeNode(3)
p.right = new TreeNode(20)
p.left = new TreeNode(9)
p.right.left = new TreeNode(15)
p.right.right = new TreeNode(7)
console.log(maxDepth(p))

p = new TreeNode(1)
p.right = new TreeNode(3)
p.right.right = new TreeNode(5)
p.left = new TreeNode(2)
p.left.left = new TreeNode(4)
console.log(maxDepth(p))