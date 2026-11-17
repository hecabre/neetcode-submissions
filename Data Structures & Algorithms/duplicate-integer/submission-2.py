class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        no_duplicates = set()
        for num in nums:
            if not num in no_duplicates:
                no_duplicates.add(num)
            else:
                return True
        return False