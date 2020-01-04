/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

  if (!p && !q) {
    return true
  }

  if (p && q && p.val === q.val) {
    return isSameTree(q.right, p.right) && isSameTree(q.left, p.left)
  }

  return false
};

/**
 * 考虑用队列
 */

const p = new TreeNode(1)
p.right = new TreeNode(2)
p.left = new TreeNode(1)
const q = new TreeNode(1)
q.right = new TreeNode(1)
q.left = new TreeNode(2)
console.log(isSameTree(q, p))