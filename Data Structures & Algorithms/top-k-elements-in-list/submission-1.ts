class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        const frecuencyMap = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            if (frecuencyMap.has(nums[i])) {
                frecuencyMap.set(nums[i], frecuencyMap.get(nums[i]) + 1);
            } else {
                frecuencyMap.set(nums[i], 1);
            }
        }
        for (const [key, val] of frecuencyMap.entries()) {
            bucket[val].push(key);
        }
        const response = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (let j = 0; j < bucket[i].length; j++) {
                response.push(bucket[i][j]);
            }
        }
        return response.slice(0, k);
    }
}
