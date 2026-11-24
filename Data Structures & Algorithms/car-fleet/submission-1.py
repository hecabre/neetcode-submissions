class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
     """
v    1 2     2     1        
x    0 1     4     7        
     ----------------------
     0 1 2 3 4 5 6 7 8 9 10
     7, 1 = 10 en 3 iteraciones
     4, 2 = 10 en 3 iteraciones
     1, 2 = 10 en 5 iteraciones
     10 - 7 / 1 = 3
     10 - 4 / 2 = 3
     10 - 1 / 2 = 5
     10 - 0 / 1 = 10
     x target - x  / velocidad
     """   
     
     cars = list(zip(position, speed))
     cars.sort(reverse=True)
     stack = []
     for car in cars:
        position = (target - car[0]) / car[1]
        if not stack:
            stack.append(position)
        else:
            if stack[-1] < position:
                stack.append(position)

     return len(stack)