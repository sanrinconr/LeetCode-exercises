# Add Two Numbers

Given a string s, find the length of the longest substring without repeating characters.

## How i think the exercise?
The maner to afront this exercise is with the idea of "iterate the string in every element and find the longest substring starting from actual element and if the value is greater than variable before update with new value ".

## Complexity of exercise
With this idea i have a dilemma finding the complexity becouse i iterate de array and in every element iterate again but no all, then i calculate this manually, taking times, and finaly, the order is O(n) !, if you interested, [here is the graph](https://docs.google.com/spreadsheets/d/13gm02irsNn18-IcsswgDPfx7mkAc9GHHf4ZVkz_pyfg/edit#gid=0) 

## Description
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

Example 2:
```
Input: l1 = [0], l2 = [0]
Output: [0]
```

Example 3:
```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.