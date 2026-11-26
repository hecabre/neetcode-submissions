class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        current_min = float("inf")
        num_min = float("inf")
        while left <= right:
            mid = (right + left) // 2
            if nums[mid] > nums[right]:
                num_min = min(nums[mid], num_min)
                left = mid + 1
            else:
                num_min = min(nums[mid], num_min)
                right = mid - 1

        return num_min