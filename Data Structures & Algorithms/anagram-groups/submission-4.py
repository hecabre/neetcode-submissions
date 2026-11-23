class Solution:
    
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        words = {}
        for word in strs:
            strike = [0] * 26 
            for letter in word:
                strike[ord(letter) - ord('a')] += 1
            if tuple(strike) in words:
                words[tuple(strike)].append(word)
            else:
                words[tuple(strike)] = [word]
            
        return list(words.values())