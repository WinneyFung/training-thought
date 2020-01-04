/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function (nums1, m, nums2, n) {
  nums1.splice(m, n)
  let i = 0
  while (i < n) {
    const begin = findIndex(i, m, nums1, nums2[i])
    move(begin, nums1, nums2[i], m)
    i++
    m++
  }
};

function findIndex (begin, end, arr, target) {
  const len = end
  while (begin <= end) {
    let mid = Math.floor(begin + (end - begin) / 2)
    if (arr[mid] == target) {
      return mid
    } else if (arr[mid - 1] < target && arr[mid] > target) {
      return mid
    } else if (arr[mid] < target) {
      begin = mid + 1
    } else {
      end = mid - 1
    }
  }

  if (end < 0) {
    return 0
  }
  if (end + 1 === len) {
    return len
  }

  return end
}

function move (begin, arr, target, len) {
  const rest = arr.splice(begin, len - begin + 1)
  arr[begin] = target
  arr.push(...rest)
}

/**
 * 排序但是在原有数组排序得思想,基本可以用快慢指针,而且可以减少时间
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  m -= 1
  n -= 1
  let len = nums1.length - 1
  while (m >= 0 && n >= 0) {
    nums1[len--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
  }
  while (n >= 0) {
    nums1[len--] = nums2[n--]
  }
};


// const nums1 = [2, 0]
const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [4, 5, 6]
const n = 3
console.log(nums1)
merge(nums1, m, nums2, n)
console.log(nums1)