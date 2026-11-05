class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxWater = 0
        let right = heights.length - 1
        let left = 0
        while(left < right) {
            let water = ((right - left) * Math.min(heights[left], heights[right]))
            maxWater = Math.max(water, maxWater)
            if(heights[left] > heights[right]) {
                right--
            } else {
                left++
            }
        }
        return maxWater
    }
}
