// File: maximumSubarray.js

/**
 * 53. Maximum Subarray
 *
 * ------------------------------------------------------------
 * PATTERN: Kadane’s Algorithm (Greedy + Dynamic Programming)
 * ------------------------------------------------------------
 *
 * Core Idea:
 * - At each index, decide:
 *   → extend current subarray OR
 *   → start new subarray
 *
 * Rule:
 * - If current sum < 0 → discard it
 * - Because negative sum will hurt future
 *
 * What we track:
 * - sum → current subarray sum
 * - max → best answer so far
 *
 * Steps:
 * 1. Add current element to sum
 * 2. Update max = max(max, sum)
 * 3. If sum < 0 → reset sum = 0
 *
 * 💡 Think like this:
 *
 * Imagine:
 * current sum = -5
 * next number = 4
 *
 * Option 1: Continue
 * -5 + 4 = -1 ❌
 *
 * Option 2: Restart
 * start fresh from 4 → sum = 4 ✅
 *
 * 👉 Always choose restart if sum is negative
 *
 * Intuition:
 * "Bad past (negative sum) → ignore and start fresh"
 *
 * Type:
 * - Greedy + DP
 *
 * When to use:
 * - Maximum / Minimum subarray problems
 * - Contiguous subarray
 *
 * One-line memory:
 * "Add → Compare → Reset if negative"
 */


/**
 * ------------------------------------------------------------
 * 1. BRUTE FORCE
 * ------------------------------------------------------------
 *
 * Idea:
 * - Try every subarray
 * - Calculate sum for each
 *
 * Time: O(n^3)
 * Space: O(1)
 */

var maxSubArray_bruteforce = function(nums) {
    let n = nums.length;
    let maxSum = -Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;

            for (let k = i; k <= j; k++) {
                sum += nums[k];
            }

            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
};


/**
 * ------------------------------------------------------------
 * 2. BETTER APPROACH
 * ------------------------------------------------------------
 *
 * Idea:
 * - Fix starting index
 * - Expand subarray and reuse sum
 *
 * Time: O(n^2)
 * Space: O(1)
 */

var maxSubArray_better = function(nums) {
    let n = nums.length;
    let maxSum = -Infinity;

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += nums[j];
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
};


/**
 * ------------------------------------------------------------
 * 3. BEST APPROACH (Kadane’s Algorithm)
 * ------------------------------------------------------------
 *
 * Idea:
 * - Keep running sum
 * - Update max
 * - Reset sum if it becomes negative
 *
 * Time: O(n)
 * Space: O(1)
 */

var maxSubArray = function(nums) {
    let max = nums[0];  // important for all-negative case
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];              // build current subarray
        max = Math.max(sum, max);   // update best answer

        if (sum < 0) {
            sum = 0;                // reset if negative
        }
    }

    return max;
};


/**
 * ------------------------------------------------------------
 * SUMMARY
 * ------------------------------------------------------------
 *
 * Brute  → O(n^3)
 * Better → O(n^2)
 * Best   → O(n)
 *
 * Space:
 * All → O(1)
 *
 * Final Intuition:
 * "Negative sum? Drop it. Keep best."
 */