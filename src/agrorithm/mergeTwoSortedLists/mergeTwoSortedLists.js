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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  }

  if (!l2) {
    return l1
  }

  const l3 = new ListNode(0)
  l3.next = new ListNode(0)
  // 尾部值
  let tNext = null
  // 尾指针 总是指向链表的最后一个节点
  let next = l3.next

  while (l1 && l2) {
    
    if (l1.val <= l2.val) {
      tNext = new ListNode(l1.val)
      l1 = l1.next
    } else if (l1.val > l2.val) {
      tNext = new ListNode(l2.val)
      l2 = l2.next
    }

    //  插入尾部
    next.next = tNext
    next = tNext
  }

  if (l1) {
    next.next = l1
  } else if (l2) {
   next.next = l2
  }

  return l3.next.next
};

const l1 = new ListNode(10)
l1.next = new ListNode(11)
l1.next.next = new ListNode(23)

const l3 = new ListNode(2)
l3.next = new ListNode(33)
console.log(l1)
console.log(l3)
const mergeList = mergeTwoLists(l1, l3)
console.log(mergeList)