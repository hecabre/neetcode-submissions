class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const triplets: number[][] = [];
        const sortedNums = nums.sort((a, b) => Number(a) - Number(b));
        const noRepeat = new Set<number>();
        for (let i = 0; i < sortedNums.length; i++) {
            if (noRepeat.has(sortedNums[i])) {
                continue;
            } else {
                let left = i + 1;
                let right = nums.length - 1;
                while (left < right) {
                    let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
                    if (sum === 0) {
                        triplets.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                        left++;
                        right--;
                        noRepeat.add(sortedNums[i]);
                        while (left < right && nums[left] === nums[left - 1]) {
                            left++;
                        }
                    } else if (sum < 0) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        return triplets;
    }
}
