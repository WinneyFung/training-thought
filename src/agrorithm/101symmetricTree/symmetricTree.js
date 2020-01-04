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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  const lastNodes = getLastNodes(root)
  const fontNodes = getFontNodes(root)
  if (lastNodes.length !== fontNodes.length) {
    return false
  }
  let i = 0
  const len = lastNodes.length
  while (i < len) {
    i++
    if (lastNodes[i] !== fontNodes[len - i - 1] && lastNodes !== null) {
      return false
    }
  }
  return true
};

//  前序遍历
const getFontNodes = (root) => {
  if (!root) {
    return []
  }

  if (root) {
    const nodes = [root.val]
    if (root.left) {
      nodes.push(...getFontNodes(root.left))
      if (!root.right) {
        nodes.push(null)
      }
    }
    if (root.right) {
      if (!root.left) {
        nodes.push(null)
      }
      nodes.push(...getFontNodes(root.right))
    }
    return nodes
  }
}

//  后续遍历
const getLastNodes = (root) => {
  if (!root) {
    return []
  }
  if (root) {
    const nodes = []
    if (root.left) {
      nodes.push(...getLastNodes(root.left))
      if (!root.right) {
        nodes.push(null)
      }
    }
    if (root.right) {
      if (!root.left) {
        nodes.push(null)
      }
      nodes.push(...getLastNodes(root.right))
    }
    nodes.push(root.val)
    return nodes
  }
}

const p = new TreeNode(1)
p.right = new TreeNode(2)
p.left = new TreeNode(1)
p.left.left = new TreeNode(2)
console.log(isSymmetric(p))