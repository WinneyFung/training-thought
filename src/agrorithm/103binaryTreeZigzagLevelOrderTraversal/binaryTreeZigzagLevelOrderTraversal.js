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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }
  const res = []
  let deep = 0
  let nodeQueue = []
  let tempQueue = []
  nodeQueue.push(root)
  while (nodeQueue.length) {
    while (nodeQueue.length) {
      let top = nodeQueue.pop()
      res[deep] = res[deep] ? res[deep] : []
      res[deep].push(top.val)
      if (deep % 2 == 0) {
        //  左向右遍历
        if (top.left) {
          tempQueue.push(top.left)
        }
        if (top.right) {
          tempQueue.push(top.right)
        }
      } else {
        //  右向左
        if (top.right) {
          tempQueue.push(top.right)
        }
        if (top.left) {
          tempQueue.push(top.left)
        }
      }
    }
    nodeQueue = tempQueue
    tempQueue = []
    deep++
  }
  return res
};

let p = new TreeNode(3)
p.right = new TreeNode(20)
p.left = new TreeNode(9)
p.right.left = new TreeNode(15)
p.right.right = new TreeNode(7)
console.log(zigzagLevelOrder(p))

p = new TreeNode(1)
p.right = new TreeNode(3)
p.right.right = new TreeNode(5)
p.left = new TreeNode(2)
p.left.left = new TreeNode(4)
console.log(zigzagLevelOrder(p))