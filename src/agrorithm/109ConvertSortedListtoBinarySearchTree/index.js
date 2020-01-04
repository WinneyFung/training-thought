
function ListNode (val) {
  this.val = val;
  this.next = null;
}

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const arr = formatList2Array(head)
  return sortedArr2BST(arr, 0, arr.length - 1)
};

function sortedArr2BST (nums, start, end) {
  if (start > end) {
    return null
  }

  const mid = Math.round((end + start) / 2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArr2BST(nums, start, mid - 1)
  root.right = sortedArr2BST(nums, mid + 1, end)

  return root
}

function formatList2Array (head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

const arr = [-10, -3, 0, 5, 9]
const list = new ListNode(-10)
const next = new ListNode(-3)
list.next = next
next.next = new ListNode(0)
list.next.next.next = new ListNode(5)
list.next.next.next.next = new ListNode(9)
console.log(sortedListToBST(list))