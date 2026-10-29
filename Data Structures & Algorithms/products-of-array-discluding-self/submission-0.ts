class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    /**
     * First array = [1, 1, 2, 8]
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix: number[] = Array.from({ length: nums.length }, () => 1);
        const suffix: number[] = Array.from({ length: nums.length }, () => 1);
        for (let i = 1; i < nums.length; i++) {
            prefix[i] *= nums[i - 1] * prefix[i - 1];
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] *= nums[i + 1] * suffix[i + 1];
        }
        for(let i = 0; i < nums.length; i++) {
            suffix[i] = suffix[i] * prefix[i]
        }
        return suffix;
    }
}
