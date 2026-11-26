class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        right = len(matrix[0]) * len(matrix) - 1
        left = 0
        cols = len(matrix[0])
        while left <= right:
            mid = (right + left) // 2
            row = mid // cols
            col = mid % cols
            print(mid, row, col)
            if matrix[row][col] == target:
                return True
            elif matrix[row][col] < target:
                left = mid + 1
            else:
                right = mid - 1
        return False