# Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

## How i think the exercise?
The maner to afront this exercise is with the idea of "use a stack to add open characters, when reach a close character pop the stack and two elements must be the couple open closed ".

## Complexity of exercise
With this idea the O(n) in use of time is O(n), because only is need iterate one time the string array

## Description
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:
```
Input: s = "()"
Output: true
```

Example 2:
```
Input: s = "()[]{}"
Output: true
```

Example 3:
```
Input: s = "(]"
Output: false
```

Constraints:
```
1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.
```