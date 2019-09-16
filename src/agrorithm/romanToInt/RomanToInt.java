package agrorithm.romanToInt;

public class RomanToInt {

    public static int romanToInt(String s) {
        char[] romans = s.toCharArray();
        int len = romans.length - 1;
        int sLen = romans.length;
        if ("I".equals(s)) {
            return 1;
        }
        if ("V".equals(s)) {
            return 5;
        }
        if ("X".equals(s)) {
            return 10;
        }

        if ("L".equals(s)) {
            return 50;
        }

        if ("C".equals(s)) {
            return 100;
        }

        if ("D".equals(s)) {
            return 500;
        }

        if ("M".equals(s)) {
            return 1000;
        }
        boolean isG = true;
        boolean isS = false;
        boolean isB = false;
        boolean isQ = false;
        int gw = 0;
        int sw = 0;
        int bw = 0;
        int qw = 0;
        while (len >= 0) {
            char roman = romans[len];
            //计算个位
            if (isG) {
                if (roman == 'I') {
                    gw++;
                    len--;
                } else if (roman == 'V') {
                    if (len == (sLen - 1)) {
                        gw = 5;
                        len--;
                        for (int i = sLen - 2; i >= 0; i--) {
                            if (romans[i] == 'I') {
                                gw--;
                                len--;
                            } else {
                                isG = false;
                                isS = true;
                                if (len >= 0) {
                                    roman = romans[len];
                                }
                                break;
                            }
                        }
                    } else {
                        gw += 5;
                        len--;
                        isG = false;
                        isS = true;
                        if (len >= 0) {
                            roman = romans[len];
                        }
                    }
                } else if (len == sLen - 1 && roman == 'X') {
                    char rInl2 = '\0';
                    if (sLen - 2 >= 0) {
                        rInl2 = romans[sLen - 2];
                    }
                    if (rInl2 != 'I') {
                        isG = false;
                        isS = true;
                        if (len >= 0) {
                            roman = romans[len];
                        }
                    } else {
                        gw = 10;
                        len--;
                        for (int j = sLen - 2; j >= 0; j--) {
                            if (romans[j] == 'I') {
                                len--;
                                gw--;
                            } else {
                                isG = false;
                                isS = true;
                                if (len >= 0) {
                                    roman = romans[len];
                                }
                                break;
                            }
                        }
                    }
                } else {
                    isG = false;
                    isS = true;
                    if (len >= 0) {
                        roman = romans[len];
                    }
                }
            }
            //计算十位
            if (isS) {
                if (roman == 'X') {
                    sw++;
                    len--;
                } else if (roman == 'L') {
                    if (len + 1 < sLen && romans[len + 1] == 'X') {
                        sw += 5;
                    } else {
                        sw = 5;
                    }
                    len--;
                    if (len >= 0) {
                        for (int i = len; i >= 0; i--) {
                            if (romans[i] == 'X') {
                                sw--;
                                len--;
                            } else {
                                isS = false;
                                isB = true;
                                if (len >= 0) {
                                    roman = romans[len];
                                }
                                break;
                            }
                        }
                    } else {
                        isS = false;
                        isB = true;
                        if (len >= 0) {
                            roman = romans[len];
                        }
                    }
                } else if (roman == 'C') {
                    char rInl2 = '\0';
                    if (len - 1 >= 0) {
                        rInl2 = romans[len - 1];
                    }
                    if (rInl2 != 'X') {
                        isS = false;
                        isB = true;
                        if (len >= 0) {
                            roman = romans[len];
                        }
                    } else {
                        sw = 10;
                        len--;
                        for (int j = len; j >= 0; j--) {
                            if (romans[j] == 'X') {
                                len--;
                                sw--;
                            } else {
                                isS = false;
                                isB = true;
                                if (len >= 0) {
                                    roman = romans[len];
                                }
                                break;
                            }
                        }
                    }
                } else {
                    isS = false;
                    isB = true;
                    if (len >= 0) {
                        roman = romans[len];
                    }
                }
            }
            //计算百位
            if (isB) {
                if (roman == 'C') {
                    bw++;
                    len--;
                } else if (roman == 'D') {
                    if (len + 1 < sLen && romans[len + 1] == 'C') {
                        bw += 5;
                    } else {
                        bw = 5;
                    }
                    len--;
                    if (len >= 0) {
                        for (int i = len; i >= 0; i--) {
                            if (romans[i] == 'C') {
                                bw--;
                                len--;
                            } else {
                                isB = false;
                                isQ = true;
                                if (len >= 0) {
                                    roman = romans[len];
                                }
                                break;
                            }
                        }
                    } else {
                        isB = false;
                        isQ = true;
                        if (len >= 0) {
                            roman = romans[len];
                        }
                    }
                } else if (roman == 'M') {
                    char rInl2 = '\0';
                    if (len - 1 >= 0) {
                        rInl2 = romans[len - 1];
                    }
                    if (rInl2 != 'C') {
                        isB = false;
                        isQ = true;
                        if (len >= 0) {
                            roman = romans[len];
                        }
                    } else {
                        bw = 10;
                        len--;
                        for (int j = len; j >= 0; j--) {
                            if (romans[j] == 'C') {
                                len--;
                                bw--;
                            } else {
                                isB = false;
                                isQ = true;
                                if (len >= 0) {
                                    roman = romans[len];
                                }
                                break;
                            }
                        }
                    }
                } else {
                    isB = false;
                    isQ = true;
                    if (len >= 0) {
                        roman = romans[len];
                    }
                    if (len >= 0) {
                        roman = romans[len];
                    }
                }
            }

            //计算千位
            if (isQ) {
                if (roman == 'M') {
                    qw++;
                    len--;
                }
            }
        }
        return Integer.parseInt(qw + "" + bw + "" + sw + "" + gw);
    }

    public static void main(String[] args) {
        System.out.println(romanToInt("X"));
        //3
        System.out.println(romanToInt("III"));
        //4
        System.out.println(romanToInt("IV"));
        //9
        System.out.println(romanToInt("IX"));
        //58
        System.out.println(romanToInt("LVIII"));
        //1994
        System.out.println(romanToInt("MCMXCIV"));
        //1884
        System.out.println(romanToInt("MDCCCLXXXIV"));
        //1476
        System.out.println(romanToInt("MCDLXXVI"));

        //1074
        System.out.println(romanToInt("MLXXIV"));

        //621
        System.out.println(romanToInt("DCXXI"));
        //2425
        System.out.println(romanToInt("MMCDXXV"));
        //2399
        System.out.println(romanToInt("MMCCCXCIX"));
        //451
        System.out.println(romanToInt("CDLI"));
        //3045
        System.out.println(romanToInt("MMMXLV"));
        //3400
        System.out.println(romanToInt("MMMCD"));
        //112
        System.out.println(romanToInt("CXII"));
    }
}
