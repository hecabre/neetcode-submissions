class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            print(mid, left, right)
            if nums[mid] == target:
                return mid
            if nums[mid] <= nums[right]:
                if target >= nums[mid] and target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1          
            else:
                if target <= nums[mid] and target >= nums[left]:
                    right = mid - 1
                else:
                    left = mid + 1
                
            # 1 3 buscamos 3
            # (0 + 1) // 2 = 0
            # 1 <= 3? Si entonces right 0 - 1 = 
        return -1
                 
