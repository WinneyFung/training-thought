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
 * 根据中序和后序确定一棵树结构
 * You may assume that duplicates do not exist in the tree.
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder && postorder.length) {
    let root = new TreeNode()
    root.val = postorder.pop()
    let mid = inorder.indexOf(root.val)
    let lInorder = inorder.slice(0, mid)
    let rInorder = inorder.slice(mid + 1)
    //  计算左右子树的后序
    let rPostorder = postorder.filter(i => rInorder.findIndex(j => j === i) >= 0)
    let lPostorder = postorder.filter(i => lInorder.findIndex(j => j === i) >= 0)

    root.left = buildTree(lInorder, lPostorder)
    root.right = buildTree(rInorder, rPostorder)

    return root
  }
  return null
};

const inorder1 = [2, 3, 1]
const postorder1 = [3, 2, 1]
console.log(buildTree(inorder1, postorder1))