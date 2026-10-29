class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const uniqueNums = new Set(nums)
        const secuences = new Set<number>()
  
        let max = 0
        for(const num of uniqueNums) {
            if(!uniqueNums.has(num - 1)){
              secuences.add(num - 1)
            }
        }
        for(let num of secuences) {
            let currentMax = 0
            while(uniqueNums.has(num + 1)){
                currentMax++
                max = Math.max(currentMax, max)
                num++
            }
        }
        
        return max 
    }
}
