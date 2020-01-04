
/**
 * 
 * 与1不同得是，返回的是最后一行的元素
 * 第n行有n+1个元素，0基
 * 因为从前往后计算的时候，i的值会被覆盖旧值，但a[i +1] 新值 = a[i]【这里的a[i]是旧值】 + a[i+1]计算
 * 所以从后往前旧可以避免这个问题
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  const results = [1, 1]

  for (let i = 2; i <= rowIndex; i++) {
    results[0] = 1
    for (let j = i - 1; j > 0; j--) {
      results[j] = results[j - 1] + results[j]
    }
    results[i] = 1
  }

  return results
};


var getRow2 = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }

  const results = []
  for (let i = 0; i < rowIndex; i++) {
    results.push(1)

  }
  for (let i = 2; i <= rowIndex; i++) {
    for (let j = rowIndex + 1 - i; j < rowIndex; j++) {
      results[j] += results[j + 1]
    }
  }

  return results
};

console.log(getRow(3))
console.log(getRow2(3))