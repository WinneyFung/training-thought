/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = function (s) {
  if (!s) {
    return 0
  }

  s = s.trim()
  const sperator = ' '
  const words = s.split(sperator)

  return words[words.length - 1].length
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function (s) {
  if (!s) {
    return 0
  }
  const sperator = ' '
  s = s.trim()
  return s.substring(s.lastIndexOf(sperator) + 1).length
};

var lengthOfLastWord = function (s) {
  s = s.trim()
  if (!s) {
    return 0
  }
  const sperator = ' '
  const lastIndex = s.lastIndexOf(sperator)
  return s.length - lastIndex - 1
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("Hello World "))
console.log(lengthOfLastWord("Hello World  "))