class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const noDuplicates = new Set(nums)
        if(noDuplicates.size !== nums.length) {
            return true
        } else {
            return false
        }
    }
}
