/**
 * @param {string} s
 * @return {number}
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * Given a non-empty string containing only digits, determine the total number of ways to decode it.
 * 这里的的digits可能包含0
 * 
 * in："12"
 * out: 2
 * 
 * in: "226"
 * out: 3
 * 
 * 首先：dp[i] = dp[i-1]
 * A条件：当当前位i<=6且前一位i-1是1或者2且i>1
 * dp[i] += dp[i-2]
 * 初始化：
 * dp[0] = 1
 * dp[1] = 1
 * 
 * 开始计算：(dp[i]指的是到decode到第i个字符一共有的decode方式。其中i从1开始算起，非0基)
 * dp[1] = dp[1-1] = 1
 * dp[2] = dp[2-1] = 1
 * 满足A条件：
 * dp[2] += dp[2-2] = 1 + 1 = 2
 * dp[3] = dp[2] = 2
 * str[3-1] = '6'，str[3-2] = '2'满足A条件
 * dp[3] += dp[3-2] = 2 + 1 = 3 
 *  
 * i:   1  2   3
 * in： 77 772 7722
 * out: 1  2   dp[i] += dp[i-2] = dp[3] += dp[1] = 2 + 1 
 * 
 * in:   12   120                  
 * out:  2    str[3 -1] =  0,  所以dp[3] = 0,有因为前一位是1，且当前位小于等于6，所以dp[3] += dp[3-2] = 0 + dp[1] = 1,（因为0必须和其他字符结合，不能单独存在，所以120只有编码 1，20这一种方式）
 *  1201
 * out:  求dp[4]
 * 因为str[3] = '1' != '0' 所以dp[4] = dp[3]] = 1,又因为前一位不是1也不是2,所以dp[4] = 1,所以这一串也只有一种编码方式 1，20 ，1这种
 * 12013 编码方式2种，在0前的编码只有一种，1，3为一种，13为一种，所有只有两种
 * 1212 0 13 
 * 0前的编码方式有： （1212）
 * 12有两种 dp[2] = 2 dp[3] = 2 + 1 = 3 dp[4] = 3 + 2 = 5种
 * 1 2 1 2
 * 12 1 2
 * 1 21 2
 * 1 2 12
 * 12 12
 * str[4] = '0' 所以dp[5] = 0种 满足当前位<= '6'
 * 且前一位str[3] = '2' 所以dp[5] += dp[i - 2] = 3种
 * 
 * 求dp[6]
 * str[5] = '1' ,dp[6] = dp[5] = 3种； 但是前一位是0，所以dp[6] = 3种
 * 求dp[7]
 * str[6] = '3' dp[7] = dp[6] = 3种 因为前一位str[5] = '1'且当前位str[6] = '3'，所以dp[7] += dp[5] =  3 ＋　３　＝　６种
 * 1212013
 * 1 2 1 20 
 * 12 1 20  * 2种 = 6种
 * 1 21 20
 * 
 * tranfer（i）:
 *  str[i -1] != '0'  dp[i] = dp[i-1]
 *  str[i-1] <= '6'（含0） &&  ( str[i-2] === '1' || str[i-3] === '2) dp[i] += dp[i-2]
 * 
 */
var numDecodings = function (s) {
  if (!s || (s.length === 1 && s[0] === '0')) {
    return 0
  }

  const dp = []
  //  初始化出来 dp[i]表示到s[i+1]个字符一共有的编码方式
  dp[0] = 1 //  为了计算方便，专门设置的
  dp[1] = 1 // 表示s[0]个字符的编码方式

  const len = s.length
  for (let i = 1; i <= len; i++) {
    const c = s[i - 1];
    if (c !== '0') {
      dp[i] = dp[i - 1]
    } else {
      dp[i] = 0 //  给一个初始值
    }

    // 要求i > 1因为只有一个字符也就只有一种解法
    if (i > 1 && (s[i - 2] - '0' === 1 || (c - '0' <= 6 && s[i - 2] - '0' === 2))) {
      //  当前位<=6（包含0）且前面的位数是1或者2
      dp[i] += dp[i - 2]
    }
  }

  return dp[len]
};

console.log(numDecodings('17'))
//  2 2 6 或者 2 26 或者22 6
console.log(numDecodings('226'))