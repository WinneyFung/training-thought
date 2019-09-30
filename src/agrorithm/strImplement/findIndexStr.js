/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 找字符串匹配的最小下标
 */
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }

  if (!needle) {
    return -1;
  }

  if (!haystack) {
    return -1;
  }

  return haystack.indexOf(needle);
};