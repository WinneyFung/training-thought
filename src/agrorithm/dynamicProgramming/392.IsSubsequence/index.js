/**
 * 
 * 
 * Example 1:
 * s = "abc", t = "asssabgabbbbbbccccchbgdc"
 * Return true.
 * 
 * Example 2:
 * s = "axc", t = "ahbgdc"
 * 
 * s[i] t[j]
 * dp[i][j]表示i~s.length-1这段中找到的
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence (s, t) {
  const sl = s.length
  const tl = t.length
  let curri = 0
  let currj = 0
  for (let i = 0; i < tl; i++) {
    if (s[curri] === t[currj]) {
      curri++
    }
    currj++
  }
  return curri === sl
}

function isSubsequence3 (s, t) {
  const sl = s.length
  let begin = 0
  let flag = true
  for (let i = 0; i < sl; i++) {
    const target = t.indexOf(s[i], begin)
    if (target < 0) {
      flag = false
      break
    } else {
      begin = target + 1
    }
  }
  return flag
}

var isSubsequence2 = function (s, t) {
  const sl = s.length
  const tl = t.length
  let begin = 0
  const result = []
  for (let i = 0; i < sl; i++) {
    while (begin >= 0 && begin < tl) {
      if (s[i] === t[begin]) {
        result.push(true)
        begin = begin + 1
        break
      } else {
        begin++
      }
    }
  }
  if (result.length === sl) {
    return true
  }
  return false
};



var s = "abc", t = "ahbgdc"
console.log(isSubsequence(s, t))
s = "leeeeetcode", t = ""
console.log(isSubsequence(s, t))