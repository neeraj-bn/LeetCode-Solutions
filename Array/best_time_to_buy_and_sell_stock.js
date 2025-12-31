/**
 * 📈 Problem: Best Time to Buy and Sell Stock
 *
 * Given an array prices where prices[i] is the price of a stock on day i,
 * find the maximum profit you can achieve.
 *
 * You may buy on one day and sell on a different future day.
 * If no profit is possible, return 0.
 */

/**
 * 🔴 BRUTE FORCE APPROACH
 *
 * Idea:
 * - Try every possible buy day (i)
 * - Try every possible sell day after it (j)
 * - Calculate profit = prices[j] - prices[i]
 * - Track the maximum profit
 *
 * Time Complexity (TC): O(n²)
 * Space Complexity (SC): O(1)
 *
 * ❌ Inefficient for large inputs
 */
var maxProfitBruteForce = function (prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
};

/**
 * 🟢 OPTIMAL APPROACH (Greedy)
 *
 * 🔑 Pattern Used:
 * - Greedy Algorithm
 * - Minimum Tracking (Prefix Minimum)
 * - Buy Low, Sell High (Single Transaction)
 *
 * Idea:
 * - Track the minimum price so far (best day to buy)
 * - At each day, calculate profit if sold today
 * - Update maximum profit
 *
 * Formula:
 * profit = currentPrice - minPriceSoFar
 *
 * Time Complexity (TC): O(n)
 * Space Complexity (SC): O(1)
 *
 * ✅ Best solution (used in interviews)
 */
var maxProfitOptimal = function (prices) {
    let minPrice = Infinity; // best price to buy so far
    let maxProfit = 0; // best profit so far

    for (let price of prices) {
        // Update minimum price
        minPrice = Math.min(minPrice, price);

        // Calculate profit if sold today
        let profit = price - minPrice;

        // Update maximum profit
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
};

/**
 * 🧠 PATTERN SUMMARY (For Revision)
 *
 * Pattern Name:
 * - Greedy + Minimum Tracking
 *
 * When to Use:
 * - Buy before sell
 * - Maximum difference problem
 * - One transaction allowed
 *
 * Key Insight:
 * - Always buy at the lowest price seen so far
 * - Always try to sell at the current price
 *
 * Mental Shortcut:
 * max(A[j] - A[i]) where j > i
 * → Think Greedy + Prefix Minimum
 */
