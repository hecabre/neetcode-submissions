class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        left = 0
        numbers = []
        for sublist in matrix:
            numbers.extend(sublist)
        right = len(numbers) - 1
        while left <= right:
            middle = (left + right) // 2
            if numbers[middle] == target:
                return True
            elif numbers[middle] < target:
                left = middle + 1
            else:
                right = middle - 1
        return False
                