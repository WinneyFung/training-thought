package agrorithm.longestCommonPrefix;

public class LongestCommonPrefix2 {
    public static  String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }
        int len = strs.length;
        String prefix = strs[0];
        for (int i = 1; i < len; i++) {
            while (!strs[i].startsWith(prefix)) {
                if (prefix.isEmpty()) {
                    return "";
                }
                prefix = prefix.substring(0, prefix.length() - 1);
            }
        }
        return prefix;
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
