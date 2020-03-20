/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  return (N >> 1) << 1 === N
};

function isOdd (x) {
  return (x & 1) > 0
}

console.log(isOdd(1))
console.log(isOdd(4))
console.log(isOdd(7))


// console.log(divisorGame(2))
// console.log(divisorGame(3))
console.log(divisorGame(4))

/**
 *
 * alice: x = 2 => n = 2
 * bob: x = 1 => n = 1
 * alice: no  输了
 *
 *
 * n = 4
 * alice: x = 1 => n = 3
 * bob: x = 1 => n = 2
 * alice: x = 1 => n = 1
 * bob: no 输了
 *
 * N = 8
 * alice: x= 1 => n = 7
 * bob: x = 1 => n = 6
 * alice: x =  1 => n = 5
 * bob: x = 1 => n = 4
 * 
 * 
 * 8
 * 1000
 * 0001
 * 
 * 7
 * 0101
 * 0001
 */