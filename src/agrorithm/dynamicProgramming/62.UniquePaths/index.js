/**
 * @param {number} m 列
 * @param {number} n 行
 * @return {number}
 * dp[i][j] = dp[i-1][j] + dp[i][j-1]
 */
var uniquePaths = function (m, n) {
  const dp = []

  //  初始化0行m列的数据，走到这些位置的方式只有一种
  for (let i = 0; i < n; i++) {
    dp[i] = []
    dp[i][0] = 1
  }

  //  初始化n行0列的数据，走到这些位置的方式只有一种
  for (let j = 0; j < m; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[n - 1][m - 1]
};
console.log(uniquePaths(7, 3))