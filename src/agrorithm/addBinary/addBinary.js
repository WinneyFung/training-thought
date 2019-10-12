/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary2 = function (a, b) {
  if (a === '0' && b === '0') {
    return '0'
  }

  a = '0b' + a
  b = '0b' + b
  a = BigInt(a)
  b = BigInt(b)
  let res = a + b
  if (res === 0) {
    return '0'
  }

  let resArr = []
  while (res > 0) {
    resArr.push(res % 2n)
    res = BigInt(res / 2n)
  }
  return resArr.reverse().join('')
};

var addBinary = function (a, b) {
  if (a === '0' && b === '0') {
    return '0'
  }
};

console.log(addBinary('11', '1'))
console.log(addBinary("1010", "1011"))