/**
 * 0行1个数字
 * n-1行n个数字
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 
 * 计算公式：a[i][j] = a[i-1][j-1] + a[i-1][j]
 */


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (!numRows) {
    return []
  }
  
  if (numRows === 1) {
    return [[1]]
  }

  const result = [[1], [1, 1]]

  for (let i = 2; i < numRows; i++) {
    const row = []
    row[0] = 1
    row[i] = 1
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j]
    }
    result.push(row)
  }

  return result

};


function showTA (a) {
  console.log('[')
  for (let i = 0; i < a.length; i++) {
    const row = a[i];
    console.log(row)
  }
  console.log(']')
}

console.log(showTA(generate(5)))