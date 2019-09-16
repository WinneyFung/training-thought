/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

  if (!s || !s.trim()) {
    return true
  }

  //  设置入栈操作
  let inStack = []
  //  输入串数组
  let toMatchList = s.split("")
  const len = toMatchList.length

  //  绝对有一个不匹配
  if (len % 2 === 1) {
    return false
  }

  //  先入栈
  inStack.push(toMatchList[0])

  let i = 1
  while (i <= len - 1) {
    const toIn = toMatchList[i]
    const top = inStack[inStack.length - 1]
    if (toIn === getMatchChar(top)) {
      //  出栈
      inStack.splice(inStack.length - 1)
    } else {
      //  入栈
      if (isStartCh(toIn)) {
        //  判断是不是开口符号
        inStack.push(toIn)
      } else {
        return false
      }
    }
    i++
  }
  if (!inStack.length) {
    return true
  }
  // 循环
  return false
}

const getMatchChar = ch => {
  switch (ch) {
    case '[':
      return ']'
    case '{':
      return '}'
    case '(':
      return ')'
    default:
      break;
  }
}

const isStartCh = ch => {
  return "[{(".indexOf(ch) >= 0
}

console.log(isValid("{}"))
console.log(isValid("{([{()}])}"))
console.log(isValid("{[]({})()}"))