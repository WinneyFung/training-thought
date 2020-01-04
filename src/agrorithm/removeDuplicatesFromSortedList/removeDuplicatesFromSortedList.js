
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates1 = function (head) {
  if (!head) {
    return head
  }
  const myHead = new ListNode(head.val)
  let myNext = myHead
  const obj = { [head.val]: true }
  next = head.next
  while (next) {
    let duplicate = obj[next.val]
    if (!duplicate) {
      obj[next.val] = true
      myNext.next = new ListNode(next.val)
      myNext = myNext.next
      next = next.next
    } else {
      next = next.next
    }
  }
  return myHead
};

var deleteDuplicates = function (head) {
  if (!head) {
    return head
  }

  const myHead = head
  let myNext = head
  let next = head.next

  while (next) {
    if (myNext.val === next.val) {
      next = next.next
    } else {
      myNext.next = new ListNode(next.val)
      myNext = myNext.next
    }
  }

  if (myHead.next && myHead.next.val === myHead.val) {
    myHead.next = null
  }

  return myHead
};

const h = new ListNode(1)
h.next = new ListNode(1)
h.next.next = new ListNode(1)
// h.next.next = new ListNode(2)
// h.next.next.next = new ListNode(3)
// h.next.next.next.next = new ListNode(3)
let myHead = deleteDuplicates(h)
show(myHead)
function show (myHead) {
  while (myHead) {
    console.log(myHead.val)
    myHead = myHead.next
  }
}