class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        max_ones = 0
        local_ones = 0
        for number in nums:
            if number == 1:
                local_ones += 1
                max_ones = max(max_ones, local_ones)
            else:
                max_ones = max(max_ones, local_ones)
                local_ones = 0
        return max_ones