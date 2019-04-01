package agrorithm.longestCommonPrefix;

public class LongestCommonPrefix {
    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }

        int len = strs.length;
        int prefixIdx = 1;
        String first = strs[0];
        if ("".equals(first)) {
            return "";
        }
        String prefix = first.substring(0, prefixIdx);
        boolean flag = true;
        do {
            for (int i = 0; i < len; i++) {
                if ("".equals(strs[i])) {
                    return "";
                }
                if (strs[i].startsWith(prefix)) {
                    continue;
                } else {
                    flag = false;
                    break;
                }
            }
            if (!flag) {
                prefixIdx--;
            }
            if (prefixIdx >= first.length()) {
                flag = false;
            }
            if (flag) {
                prefixIdx++;
                prefix = first.substring(0, prefixIdx);
            }
        } while (flag);
        return strs[0].substring(0, prefixIdx);
    }

    public static void main(String[] args) {
        String[] strs = {"winney", "winneyffwin", "winneyffww", "winneyff"};
        String[] strs2 = {"winney", "wsss", "winneyffww", "winneyff"};
        String[] strs3 = {"aa0", "aa"};
        System.out.println(longestCommonPrefix(strs));
        System.out.println(longestCommonPrefix(strs2));
        System.out.println(longestCommonPrefix(strs3));
    }
}
