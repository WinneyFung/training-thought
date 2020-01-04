
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return
  }

  if (root.right) {
    flatten(root.right)
  }

  if (root.left) {
    flatten(root.left)
    //  与最右子树交换
    let tr = root.right
    root.right = root.left
    let mostRight = getMostRight(root.right)
    mostRight.right = tr
    root.left = null
  }

}

/**
 * 获得最左节点。如果不存在左孩子，则返回根节点
 * @param {*} root 
 */
function getMostRight (root) {
  while (root.right) {
    root = root.right
  }
  return root
};

let p = new TreeNode(1)
p.right = new TreeNode(5)
p.right.right = new TreeNode(6)

p.left = new TreeNode(2)
p.left.left = new TreeNode(3)
p.left.right = new TreeNode(4)
flatten(p, 26)
console.log(p)
