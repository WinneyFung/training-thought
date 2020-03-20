/**
 * @param {string} s
 * @return {number}
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * The length of the input string will fit in range [1, 105].
 * The input string will only contain the character '*' and digits '0' - '9'.
 * 分析参考：https://www.cnblogs.com/grandyang/p/7279152.html
 * 关联题目：91.DecodeWays
 */
var numDecodings = function (s) {
  const dp = []
  const MOD = 10 ** 9 + 7

  if (!s) {
    return 0;
  }

  if (s[0] === '0') {
    return 0
  }

  const len = s.length
  dp[0] = 1
  dp[1] = s[0] === '*' ? 9 : 1

  for (let i = 2, n = len + 1; i < n; i++) { //从s[1]开始算起

    if (s[i - 1] === '0') {
      if (s[i - 2] === '0') {
        return 0
      } else if (s[i - 2] === '1' || s[i - 2] === '2') { //  只能和1或者2结合
        dp[i] = dp[i - 2]
      } else if (s[i - 2] === '*') {
        dp[i] = 2 * dp[i - 2]
      } else {
        dp[i] = 0
      }
    }

    if (s[i - 1] - '0' >= 1 && s[i - 1] - '0' <= 9) {
      //  属于1-9之间的正常解法，和之前做的91题目处理方式一致.肯定是可以编码的
      dp[i] = dp[i - 1]
      //  考虑合并的情况
      if (s[i - 2] === '1') { //  前一个是1，那么可以和s[i-1]的任意数字合并
        dp[i] += dp[i - 2]
      }

      if (s[i - 2] === '2' && s[i - 1] - '0' <= 6) { // 前面是2，可以和1-6这6个数字合并，大条件是1-9这个鞋字符才会进入循环
        dp[i] += dp[i - 2]
      }

      if (s[i - 2] === '*') { //  前面是*，那么是可以为1或者2都可以参与合并
        dp[i] += dp[i - 2]
        if (s[i - 1] - '0' <= 6) {
          dp[i] += dp[i - 2]
        }
      }
    }

    if (s[i - 1] === '*') {
      dp[i] = 9 * dp[i - 1] //  前面的每一种选择都有9种选择
      if (s[i - 2] === '1') { //  考虑结合情况，前面的dp[i-2]种可能都可以参数1与*的9种组合
        dp[i] += 9 * dp[i - 2]
      }
      if (s[i - 2] === '2') { //  如果是2，那么后面的1-6都可以，*可以变为【1-9】
        dp[i] += 6 * dp[i - 2]
      }
      if (s[i - 2] === '*') {
        dp[i] += 15 * dp[i - 2] // 6+9 *变为1和2
      }
    }

    dp[i] = dp[i] % MOD

  }

  return dp[len]
};

console.log(numDecodings("2839")) // 1
console.log(numDecodings("***")) // 999
/**
 * dp[0] = 1
 * dp[1] = 9*dp[0] = 9
 * dp[2] = 9*dp[1] = 81
 * dp[2] += 15*dp[0] + 81 = 96
 * dp[3] = 9 * dp[2] = 9*96
 * dp[3] += 15 * dp[1] = 15 * 9
 */
console.log(numDecodings("***7")) // 1095 
console.log(numDecodings("*1")) //  11种
console.log(numDecodings("1*")) //  9+9 = 18种
console.log(numDecodings("2*")) //  9 + 6 = 15
console.log(numDecodings("**")) //  96 = 18 + 15 + 7 * 9 = 33 + 63