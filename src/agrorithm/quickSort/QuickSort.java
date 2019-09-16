package agrorithm.quickSort;

public class QuickSort {
    private int[] arr;

    public static void sort(int[] arr, int start, int end) {
        //只要（头尾不相等 而且start小于end指针） 可以继续
        //设置一个基准点 最终目标是基准点的右边是小于基准点的数，基准点左边是大于基准点的数，
        //默认基准点是第一位
        //怎么找到基准点的位置呢？
        // 头尾各设置一个哨兵，
        //头哨兵负责找大于基准点的数
        //尾哨兵负责找小于基准点的数
        //尾先找 找的时候 尾指针的索引一定要大于头指针
        //头找的时候 一定要小于尾指针
        //两者重复堵的下标  就是基准点的位置
        //递归
        if (start >= end) {
            return;
        }

        int i = start;
        int j = end;
        int base = arr[start];

        while (i != j) {
            while (j > i && arr[j] >= base) {
                j--;
            }

            while (j > i && arr[i] <= base) {
                i++;
            }

            if (i < j) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        //找到基准点
        arr[start] = arr[i];
        arr[i] = base;
        sort(arr, start, i - 1);
        sort(arr, i + 1, end);
    }

    public static void main(String[] args) {
        int[] arr = {44, 3, 4, 2, 42, 24, 23, 22};
        int n = arr.length - 1;
        show(arr);
        sort(arr, 0, n);
        show(arr);
    }

    public static final void show(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "   ");
        }
        System.out.println();
    }
}
