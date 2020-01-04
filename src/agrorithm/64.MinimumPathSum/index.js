
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || !grid[0]) {
    return 0
  }

  const iLen = grid.length
  const jLen = grid.length

  for (let i = 0; i < iLen; i++) {
    for (let j = 0; j < jLen; j++) {

    }
  }

};

//  自顶向上
/***
 * grid[i][j]表示i行j列的值
 * d[i][j]表示i行j列最佳解，即最小值
 * down = grid[i+1][j]
 * right =  grid[i][j+1]
 * d[i][j] = d[i-1][j] + min(down,right)
 */
function minSum (grid, i, j, endi, endj) {
  if (i === endi) {
    return 
  }
  let downValue = grid[i + 1][j]
  let rightValue = grid[i][j + 1]
  return minSum[i - 1][j] + Math.min(downValue, rightValue)
}