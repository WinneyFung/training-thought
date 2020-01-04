/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  let i = 0
  let x = getX(N)
  if (x) {
    i++
  }
};

function getX (N) {
  let x = null
  for (let i = Math.round(n / 2); i > 0; i--) {
    if (N % i === 0) {
      return x
    }
  }
}