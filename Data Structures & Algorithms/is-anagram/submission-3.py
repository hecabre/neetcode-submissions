class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): 
            return False
        s_map = {}
        t_map = {}
        for i in range(len(s)):
            if s[i] in s_map:
                 s_map[s[i]] += 1
            else:
                s_map[s[i]] = 1
 
        for i in range(len(t)):
            if t[i] in t_map:
                t_map[t[i]] += 1
            else:
                t_map[t[i]] = 1
                
        for i in s_map.keys():
            print(i, t_map.get(i), s_map.get(i), )
            if t_map.get(i) != s_map.get(i):
                return False

        return True