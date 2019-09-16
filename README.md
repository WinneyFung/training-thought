# training-thought
重拾数据结构、算法

# 20. Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
确定字符串是否正确的关闭，成对出现。

# 26. Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
> 给定排序的数组nums，就地删除重复项，使每个元素只出现一次并返回新的长度。 不要为另一个数组分配额外的空间，必须通过使用O（1）额外内存修改输入数组来实现此目的。
> 解决方案的核心是：构建不重复的数据，用i指针（0开始），j指针用于寻找和i指针不一样的值，当发现不一样值时，i指针向前走。最后长度返回i+1