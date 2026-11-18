class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Key character 
        # Val list of anagrams
        anagrams = {}
        for word in strs:
            strike = [0] * 26
            for char in word:
                strike[ord(char) - ord('a')] += 1
            if tuple(strike) not in anagrams:
                anagrams[tuple(strike)] = []
                anagrams[tuple(strike)].append(word)
            else:
                anagrams[tuple(strike)].append(word)
        return list(anagrams.values())