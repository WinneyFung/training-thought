
/**
 * @param {number[][]} grid
 * @return {number}
 * grid[i][j] = Math.min(grid[i-1][j] , grid[i][j-1]) + grid[i][j]
 */
var minPathSum = function (grid) {
  if (!grid || !grid[0]) {
    return 0
  }

  const iLen = grid.length
  const jLen = grid[0].length

  for (let i = 1; i < jLen; i++) {
    grid[0][i] += grid[0][i - 1]
  }

  for (let i = 1; i < iLen; i++) {
    grid[i][0] += grid[i - 1][0]
  }

  for (let i = 1; i < iLen; i++) {
    for (let j = 1; j < jLen; j++) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
    }
  }

  return grid[iLen - 1][jLen - 1]
};

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]

console.log(minPathSum(grid))