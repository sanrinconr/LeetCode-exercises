# 3Sum

## Description

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


## How i think the exercise?
My first manner to afront this exercise was a three for's simple and easy, but it was refused by leetcode becouse time of execution O(n^3)

The second manner was using a hash table to evit the use of the third for.

The idea is based in the third number is the result of the sum of two other numbers, with this in mind, the process was:
sum the actual element of first "for" and second "for", then if hashtable has the inverse (with -), the triplet has been discovered!

Example, in the first "for" we have a 1, in the second "for", we have a 3, and finally, if a -4 is in the hash table, we discover a triplet!

And for what this stuff? becouse with the use of hastable the order is O(n^2) !

## Complexity of exercise
As i mencioned, in a first approach the order has been O(n^3) and with the use of hashtable this is reduced to O(n^2)! 

## Description
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Example 1:
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

Example 2:
```
Input: nums = []
Output: []
```

Example 3:
```
Input: nums = [0]
Output: []
```

Constraints:
```
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
```
