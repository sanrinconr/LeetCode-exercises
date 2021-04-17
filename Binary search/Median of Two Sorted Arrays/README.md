# Add Two Numbers

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

## How i think the exercise?
The maner to afront this exercise is with the idea of "Insert the two arrays in a tree (log(n)), after, get a array result of inorden and get the medium of this array, return this value".

## Complexity of exercise
With this idea the O(n) in use of time is O(log(n+m)) where n and m is the length of every array, this complexity is the result of the use of a binary tree

## Description
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

Example 2:
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

Example 3:
```
Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
```

Example 4:
```
Input: nums1 = [], nums2 = [1]
Output: 1.00000
```

Constraints:

```
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-10^6 <= nums1[i], nums2[i] <= 10^6
```