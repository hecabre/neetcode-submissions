class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        bucket = [[] for _ in range(len(nums) + 1)]
        frecuency = {}
        response = []
        for num in nums:
            if num in frecuency:
                frecuency[num] += 1
            else:
                frecuency[num] = 1
        for key in frecuency.keys():
            bucket[frecuency.get(key)].append(key)

        for val in range(len(bucket)-1, -1, -1):
            for number in bucket[val]:
                response.append(number)
                if len(response) == k:
                    return response
        
        return response