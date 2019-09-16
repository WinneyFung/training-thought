/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * 思路： 分层计算： 先计算val的值，每个node的值再递归计算
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let l3 = new ListNode()
  if (!l1 && !l2) {
    return null
  }

  if (l1 && !l2) {
    l3 = l1
    return l3
  }

  if (!l1 && l2) {
    l3 = l2
    return l3
  }

  if (l1.val <= l2.val) {
    l3.val = l1.val
    l1 = l1.next
  } else {
    l3.val = l2.val
    l2 = l2.next
  }

  l3.next = mergeTwoLists(l1,l2)

  return l3
}

const l1 = new ListNode(-9)
l1.next = new ListNode(3)

const l3 = new ListNode(5)
l3.next = new ListNode(7)
console.log(l1)
console.log(l3)
const mergeList = mergeTwoLists(l1, l3)
console.log(mergeList)