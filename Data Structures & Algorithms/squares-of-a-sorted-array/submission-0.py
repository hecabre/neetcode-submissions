class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left = 0
        right = len(nums) - 1
        aux = len(nums) - 1
        response = [0] * len(nums)
        while(left <= right):
            if abs(nums[left]) < abs(nums[right]):
                response[aux] = nums[right] ** 2
                right -= 1
            else:
                response[aux] = nums[left] ** 2
                left += 1
            aux -= 1
        return response