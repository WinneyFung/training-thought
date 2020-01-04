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
var levelOrderBottom2 = function (root) {
  const res = []
  getLevelTree(root, res, 0)
  return res.reverse()
};

function getLevelTreeRecursive (root, arr, deep) {
  if (!root) {
    return
  }
  arr[deep] = arr[deep] ? arr[deep] : []
  arr[deep].push(root.val)
  getLevelTreeRecursive(root.left, arr, deep + 1)
  getLevelTreeRecursive(root.right, arr, deep + 1)
}


var levelOrderBottom = function (root) {
  if (!root) {
    return []
  }
  const res = []
  //  先进先出 push ，shift
  let queue = []
  let childrenQueue = []
  let deep = 0
  queue.push(root)
  while (queue && queue.length) {
    while (queue && queue.length) {
      const node = queue.shift()
      res[deep] = res[deep] ? res[deep] : []
      res[deep].push(node.val)
      if (node.left) {
        childrenQueue.push(node.left)
      }
      if (node.right) {
        childrenQueue.push(node.right)
      }
    }
    //  当前层数已经遍历完成
    deep++
    queue = childrenQueue
    childrenQueue = []
  }
  return res.reverse()
};


let p = new TreeNode(3)
p.right = new TreeNode(20)
p.left = new TreeNode(9)
p.right.left = new TreeNode(15)
p.right.right = new TreeNode(7)
console.log(levelOrderBottom(p))