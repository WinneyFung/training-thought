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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree2 = function (preorder, inorder) {
  if (inorder && inorder.length) {
    let fst = preorder[0]
    let mid = inorder.findIndex(n => n === fst)
    let root = new TreeNode(fst)
    preorder = preorder.slice(1)
    let leftInorder = inorder.slice(0, mid)
    root.left = buildTree(preorder, leftInorder)
    // 将preorder中排除左子树的节点
    preorder = preorder.filter(n => leftInorder.findIndex(ln => ln === n) === -1)
    root.right = buildTree(preorder, inorder.slice(mid + 1))
    return root
  }
  return null
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (inorder && inorder.length) {
    let fst = preorder[0]
    let mid = inorder.findIndex(n => n === fst)
    let root = new TreeNode(fst)
    preorder = preorder.slice(1)
    let leftInorder = inorder.slice(0, mid)
    root.left = buildTree(preorder, leftInorder)
    // 将preorder中排除左子树的节点
    preorder = preorder.filter(n => leftInorder.findIndex(ln => ln === n) === -1)
    root.right = buildTree(preorder, inorder.slice(mid + 1))
    return root
  }
  return null
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))


