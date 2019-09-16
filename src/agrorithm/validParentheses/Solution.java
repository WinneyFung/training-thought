package agrorithm.validParentheses;

/***
 *  错误的思路 不管从中间指针开始指还是从开头指，都比较麻烦
 */
class Solution {

    public boolean isValid(String s) {
        if (s == null || s == "" || s.trim().length() == 0) {
            return true;
        }

        if (s.length() % 2 == 1) {
            return false;
        }

        char[] chars = s.toCharArray();
        int len = chars.length;
        //  匹配当前符号的结束位置
        int temp = 0;
        int index = 0;

        while (index < len - 1) {
            Character endChar = this.getEnd(chars[index]);
            if (endChar == null) {
                return false;
            }
            //   往temp后面找
            temp = s.substring(temp).indexOf(endChar) + temp;
            if (temp < 0) {
                //   没有找到匹对
                return false;
            } else if (temp == index + 1) {
                //   匹对的就在旁边
                if (temp == len - 1) {
                    return true;
                }
                index = index + 2;
            } else if (temp > index) {
                //   匹对中间有其他字符
                if ((temp - index + 1) % 2 == 1) {
                    //  不是成对出现
                    return false;
                }
                if (!this.isValid(s.substring(index + 1, temp))) {
                    return false;
                } else {
                    temp++;
                    index = temp;
                }
            }
        }

        return true;
    }

    private Character getEnd(char c) {
        switch (c) {
            case '[':
                return ']';
            case '{':
                return '}';
            case '(':
                return ')';
            default:
                return null;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.isValid("(([]){})")); // true
        System.out.println(solution.isValid("[{()}][]{}")); // true

//        System.out.println(solution.isValid("{}")); // true
//        System.out.println(solution.isValid(""));
//        System.out.println(solution.isValid("jjjjj"));
//        System.out.println(solution.isValid("[]{}({})[]{}")); // true
//        System.out.println(solution.isValid("[{()}]")); // true
    }
}