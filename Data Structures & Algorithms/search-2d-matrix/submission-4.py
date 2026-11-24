class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # Matrix[0] 4 son cols
        # Matrix 3 son rows
        length = (len(matrix[0]) * len(matrix)) - 1 
        left = 0
        right = (len(matrix[0]) * len(matrix)) - 1
        print(length)
        print(f"posicion: {(left)}")
        """
            Se deben de sumar los indices 2d para dar la pos del indice 1d

        """
        while left <= right:
            mid = (left + right) // 2
            row = mid // len(matrix[0])
            col = mid % len(matrix[0])
            if matrix[row][col] == target:
                return True
            elif matrix[row][col] < target:
                left = mid + 1
            else:
                right = mid - 1
        return False