class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0
        let min = prices[0]
        for(let i = 1; i < prices.length; i++) {
           min = Math.min(min, prices[i])
           const currentProfit = prices[i] - min
           profit = Math.max(profit, currentProfit)
        }
        return profit
    }
}
