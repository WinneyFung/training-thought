/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 特殊处理： 
 * 第一行只要前面有障碍，那么不能通行
 * 第一列同理，只要前面有障碍，那么后面也不能同行
 * obstacleGrid的值为1的时候，是有障碍
 * 如果没有障碍
 * dp[i][j] = dp[i][j-1] + dp[i-1][j]
 * 如果该格子有障碍，那么这个格子的走法只有0种
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  //  n行
  const n = obstacleGrid.length
  //  m列
  let m = 0
  const dp = [[]]
  if (n > 0) {
    m = obstacleGrid[0].length
  }

  let noPath = false
  //  如果无障碍，第一行全部为1,noPath标识是否有路径到达，没有为true
  for (let i = 0; i < m; i++) {
    const hasObstale = obstacleGrid[0][i];
    if (hasObstale || noPath) {
      dp[0][i] = 0,
        noPath = true
    } else {
      dp[0][i] = 1
    }
  }
  noPath = !!obstacleGrid[0][0]
  //  如果无障碍，第一列全部为1
  for (let i = 1; i < n; i++) {
    dp[i] = []
    const hasObstale = obstacleGrid[i][0];
    if (hasObstale || noPath) {
      dp[i][0] = 0
      noPath = true
    } else {
      dp[i][0] = 1
    }
  }

  //  使用公式计算dp[i]的值
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      const hasObstale = obstacleGrid[i][j];
      if (hasObstale) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[n - 1][m - 1]
};
console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]))

console.log(uniquePathsWithObstacles([[1, 0]]))
console.log(uniquePathsWithObstacles([[1], [0]]))