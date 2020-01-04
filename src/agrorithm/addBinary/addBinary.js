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

var addBinary3 = function (a, b) {
  if (a === '0' && b === '0') {
    return '0'
  }
  let res = []
  let i = a.length
  let j = b.length
  let len = 0
  while (i && j) {
    len++
    i--
    j--
    if (a[i] === '1' && b[j] === '1') {
      if (res.length >= len) {
        res.unshift('1')
      } else {
        res.unshift('0')
        res.unshift('1')
      }
    } else if (a[i] === '1' || b[j] === '1') {
      if (res.length >= len) {
        res.unshift('0')
      }
      res.unshift('1')
    } else {
      if (res.length < len) {
        res.unshift('0')
      }
    }
  }
  res = res.join('')
  if (i > 0) {
    if (res.length > len) {
      return addBinary(res[0], a.substring(0, i)) + res.substring(1)
    } else {
      return b.substring(0, j) + res
    }
  } else if (j > 0) {
    if (res.length > len) {
      return addBinary(res[0], b.substring(0, j)) + res.substring(1)
    } else {
      return b.substring(0, j) + res
    }
  } else {
    return res
  }
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var s = "";
  var c = 0;
  var i = a.length - 1;
  var j = b.length - 1;
  while(i >= 0 || j >= 0 || c == 1)
  {
      c += i >= 0 ? parseInt(a[i --]) : 0;
      c += j >= 0 ? parseInt(b[j --]) : 0;
      s = (c % 2) + s;
      c = parseInt(c / 2);
  }
  return s;
};

console.log(addBinary('110010', '10111')) // "1001001"  1010101
// console.log(addBinary('100', '110010')) // 100
// console.log(addBinary('11', '1')) // 100
// console.log(addBinary("1010", "1011")) //..10101
// console.log(addBinary("1111", "1111")) //"11110"