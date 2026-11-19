class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        replacements = []
        for i in range(len(code)):
            current_sum = 0
            if k > 0:
                counter = 0
                next_element = (i + 1) % len(code)
                while counter < k:
                    current_sum += code[next_element]
                    next_element = (next_element + 1) % len(code)
                    counter += 1
                replacements.append(current_sum)
            elif k < 0:
                counter = 0
                next_element = (i - 1) % len(code)
                while counter > k:
                    current_sum += code[next_element]
                    next_element = (next_element - 1) % len(code)
                    counter -= 1
                    
                replacements.append(current_sum)
            else:
                replacements.append(0)
        return replacements