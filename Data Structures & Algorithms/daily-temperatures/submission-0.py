class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = [] # Guardamos una tupla con temp, index

        for index in range(len(temperatures)):
            while stack and temperatures[index] > temperatures[stack[-1]]:
                stack_index = stack.pop()
                res[stack_index] = (index - stack_index)
            stack.append(index)
        return res