class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        complements = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement not in complements:
                complements[nums[i]] = i
            else:
                return [complements.get(complement), i]
        return []