class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        number = 0
        underscore = 0
        for i in range(len(nums)):
            if nums[i] == val:
                nums[i] = -1
                underscore += 1
            else:
                number += 1

        nums.sort(reverse=True)
        return number