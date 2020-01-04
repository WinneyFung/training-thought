function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const res = []
  if (root) {
    getValidPathSum(root, sum, 0, [], res)
  }
  return res
};

function getValidPathSum (root, sum, tempSum, tempArr, resArr) {

  tempSum += root.val
  tempArr = [...tempArr, root.val]

  if (root && !root.right && !root.left && tempSum === sum) {
    resArr.push(tempArr)
  }

  if (root.right) {
    getValidPathSum(root.right, sum, tempSum, tempArr, resArr)
  }

  if (root.left) {
    getValidPathSum(root.left, sum, tempSum, tempArr, resArr)

  }
}

let p = new TreeNode(5)
p.right = new TreeNode(8)
p.right.right = new TreeNode(4)
p.right.right.right = new TreeNode(1)
p.right.right.left = new TreeNode(5)
p.right.left = new TreeNode(13)

p.left = new TreeNode(4)
p.left.left = new TreeNode(11)
p.left.left.right = new TreeNode(2)
p.left.left.left = new TreeNode(7)
console.log(pathSum(p, 22))

p.right = new TreeNode(8)
p.right.right = new TreeNode(4)
p.right.left = new TreeNode(13)
p.right.right.right = new TreeNode(1)

p.left = new TreeNode(4)
p.left.left = new TreeNode(11)
p.left.left.left = new TreeNode(7)
p.left.left.right = new TreeNode(2)
console.log(pathSum(p, 22))

/* p = new TreeNode(1)
p.right = new TreeNode(-3)
p.right.left = new TreeNode(-2)

p.left = new TreeNode(-2)
p.left.left = new TreeNode(1)
p.left.right = new TreeNode(3)
p.left.left.left = new TreeNode(-1) */

p = new TreeNode(5)
p.right = new TreeNode(8)
p.right.right = new TreeNode(4)
p.right.right.right = new TreeNode(1)
p.right.left = new TreeNode(13)

p.left = new TreeNode(-2)
p.left.left = new TreeNode(1)
p.left.right = new TreeNode(3)
p.left.left.left = new TreeNode(-1)
console.log(pathSum(p, 26))