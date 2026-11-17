class Solution:
    def isValid(self, s: str) -> bool:
        parentheses = {"(": ")", "{": "}", "[": "]"}
        stack = []

        for i in s:
            if i in parentheses:
                stack.append(i)
            else:
                if not stack or parentheses.get(stack[-1]) != i:
                    return False
                else:
                    stack.pop()
        return len(stack) == 0
