import re 
class Solution:
    def isPalindrome(self, s: str) -> bool:
        clear_s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
        left = 0
        right = len(clear_s) - 1
        print(clear_s)
        while(left < right):
            if clear_s[left] != clear_s[right]:
                return False
            left += 1
            right -= 1
        return True
