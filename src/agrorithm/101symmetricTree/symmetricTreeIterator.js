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
  console.log(fontNodes, lastNodes)
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
  const nodeStack = []
  const nodes = []
  nodeStack.push(root)
  while (nodeStack.length) {
    const top = nodeStack.pop()

    if (top) {
      nodes.push(top.val)

      if (top.right) {
        nodeStack.push(top.right)
        if (!top.left) {
          nodeStack.push(null)
        }
      }

      if (top.left) {
        if (!top.right) {
          nodeStack.push(null)
        }
        nodeStack.push(top.left)
      }

    } else {
      nodes.push(top)
    }
  }
  return nodes
}

//  后续遍历
const getLastNodes = (root) => {
  if (!root) {
    return []
  }

  const nodeStack = []
  const nodes = []
  //  每个节点push，用于判断是否已经是处理过得
  nodeStack.push(root)
  nodeStack.push(root)
  while (nodeStack.length) {
    let top = nodeStack.pop()
    if (nodeStack.length && top === nodeStack[nodeStack.length - 1]) {
      if (top) {
        if (top.right) {
          nodeStack.push(top.right)
          nodeStack.push(top.right)
          if (!top.left) {
            nodeStack.push(null)
            nodeStack.push(null)
          }
        }
        if (top.left) {
          if (!top.right) {
            nodeStack.push(null)
            nodeStack.push(null)
          }
          nodeStack.push(top.left)
          nodeStack.push(top.left)
        }
      }
    } else {
      if (top) {
        nodes.push(top.val)
      } else {
        nodes.push(top)
      }
    }
  }
  return nodes
}

const p = new TreeNode(1)
p.right = new TreeNode(2)
p.left = new TreeNode(1)
p.left.left = new TreeNode(2)
console.log(isSymmetric(p))