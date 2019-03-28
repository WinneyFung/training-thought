package agrorithm;

/**
 * 判断一个数是不是回文数
 */
public class Palindrome {
    public static boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        if(x==0) {
            return true;
        }
        String input = String.valueOf(x);
        int i = input.length() - 1;
        int j = 0;
        while (i >= j) {
            if (input.charAt(i) != input.charAt(j)) {
                return false;
            } else {
                i--;
                j++;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(1998991));
        System.out.println(isPalindrome(19988991));
        System.out.println(isPalindrome(199878991));
        System.out.println(isPalindrome(199880991));
    }
}
