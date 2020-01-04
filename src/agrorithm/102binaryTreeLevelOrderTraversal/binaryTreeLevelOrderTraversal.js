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
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const res = []
  let deep = 0
  getLevelOrder(root, res, deep)
  return res
};

function getLevelOrder (root, res, deep) {
  if (!res[deep]) {
    res[deep] = []
  }
  const deepList = res[deep]
  deepList.push(root.val)
  if (root.left) {
    getLevelOrder(root.left, res, deep + 1)
  }
  if (root.right) {
    getLevelOrder(root.right, res, deep + 1)
  }
}

/**
 * 使用循环进行广度遍历
 * @param {*} root 
 */
var levelOrderIterator = root => {
  if (!root) {
    return []
  }
  const res = []
  const nodeQueue = []
  let deep = 0
  nodeQueue.push(root)
  //  临时队列，用来存下一个深度的节点
  tempQueue = []
  while (nodeQueue.length) {
    while (nodeQueue.length) {
      const top = nodeQueue.shift()
      res[deep] = res[deep] ? res[deep] : []
      res[deep].push(top.val)
      if (top.left) {
        tempQueue.push(top.left)
      }
      if (top.right) {
        tempQueue.push(top.right)
      }
    }
    nodeQueue.push(...tempQueue)
    tempQueue = []
    deep++
  }
  return res
}

const p = new TreeNode(1)
p.right = new TreeNode(2)
p.left = new TreeNode(1)
p.left.left = new TreeNode(2)
console.log(levelOrder(p))
console.log(levelOrderIterator(p))
