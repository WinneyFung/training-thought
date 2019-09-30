# training-thought
重拾数据结构、算法

## 20. Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
确定字符串是否正确的关闭，成对出现。

## 26. Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
> 给定排序的数组nums，就地删除重复项，使每个元素只出现一次并返回新的长度。 不要为另一个数组分配额外的空间，必须通过使用O（1）额外内存修改输入数组来实现此目的。
> 解决方案的核心是：构建不重复的数据，用i指针（0开始），j指针用于寻找和i指针不一样的值，当发现不一样值时，i指针向前走。最后长度返回i+1

## 27. Remove Element
Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.
> 这道题的思想和26题一样的，26的目的在于去重，本题只需要将和待删除的元素移动到前面，同样用两个指针i，j。i总是指向最后一个待删除
元素的位置。

## 28. Implement strStr()
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
> 实现类似java的IndexOf()功能，进行字符串匹配

## 35. Search Insert Position
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

## 53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
> 求连续的数字和最大的片段