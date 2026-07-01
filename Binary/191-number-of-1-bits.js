/**
 * ============================================================
 * 191. Number of 1 Bits
 * ============================================================
 *
 * Problem:
 *
 * Given a positive integer n.
 *
 * Write a function that returns the number of set bits
 * (1's) in its binary representation.
 *
 * This is also known as the Hamming weight.
 *
 * Example:
 *
 * Input:
 * n = 11
 *
 * Output:
 * 3
 *
 * Explanation:
 * 11 in binary = 1011 → three set bits
 *
 * Input:
 * n = 128
 *
 * Output:
 * 1
 *
 * Explanation:
 * 128 in binary = 10000000 → one set bit
 *
 * Input:
 * n = 2147483645
 *
 * Output:
 * 30
 *
 * Constraints:
 * 1 <= n <= 2^31 - 1
 *
 * Follow up:
 * If this function is called many times, how would you optimize it?
 *
 * ============================================================
 * HOW TO THINK?
 * ============================================================
 *
 * We just need to count how many bits are 1
 * in the binary form of n.
 *
 * Two natural ways:
 *
 * 1. Check the last bit using AND with 1,
 *    then right shift to check the next bit.
 *
 * 2. Use a trick: n & (n - 1)
 *    This removes the lowest set bit in one step.
 *
 * Example of trick:
 *
 * n     = 1011  (11)
 * n - 1 = 1010  (10)
 *
 * n & (n-1) = 1010
 *
 * Notice the rightmost 1 got removed.
 *
 * Repeat until n becomes 0 —
 * the number of repetitions = number of set bits.
 *
 * ============================================================
 * PATTERN
 * ============================================================
 *
 * Bit Manipulation
 *
 * General Pattern:
 *
 * Count set bits
 * +
 * Need O(1) space, simple bit tricks
 *
 * Think:
 *
 * Right shift + AND with 1
 * OR
 * Brian Kernighan's Algorithm (n & (n-1))
 *
 * Similar Problems:
 *
 * - Counting Bits
 * - Power of Two
 * - Single Number
 * - Sum of Two Integers
 *
 * ============================================================
 * APPROACH 1 : BRUTE FORCE (CHECK EACH BIT)
 * ============================================================
 *
 * Idea:
 *
 * Loop through all 32 bits.
 *
 * Check if the last bit is 1 using (n & 1).
 *
 * Right shift n by 1 each time.
 *
 * Count how many times the bit was 1.
 *
 * Time Complexity:
 * O(32) → O(1)  (fixed number of bits)
 *
 * Space Complexity:
 * O(1)
 */

function hammingWeightBruteForce(n) {
    let count = 0;

    while (n !== 0) {
        count += n & 1;
        n = n >>> 1; // unsigned right shift (important for JS)
    }

    return count;
}

/**
 * ============================================================
 * APPROACH 2 : OPTIMAL (BRIAN KERNIGHAN'S ALGORITHM)
 * ============================================================
 *
 * Pattern:
 *
 * Bit Manipulation — Remove lowest set bit
 *
 * Idea:
 *
 * n & (n - 1)
 *
 * removes the rightmost set bit.
 *
 * Keep doing this and count how many times
 * until n becomes 0.
 *
 * Why is this better?
 *
 * Brute force checks every bit (32 times),
 * even the 0 bits.
 *
 * Brian Kernighan's trick only loops
 * as many times as there are SET bits,
 * skipping all the zero bits directly.
 *
 * Example:
 *
 * n = 1011  (11)
 *
 * Step 1:
 * n & (n-1) = 1011 & 1010 = 1010   (count = 1)
 *
 * Step 2:
 * n & (n-1) = 1010 & 1001 = 1000   (count = 2)
 *
 * Step 3:
 * n & (n-1) = 1000 & 0111 = 0000   (count = 3)
 *
 * n = 0 → stop
 *
 * Result = 3
 *
 * Time Complexity:
 * O(k)  where k = number of set bits (k <= 32)
 *
 * Space Complexity:
 * O(1)
 */

function hammingWeight(n) {
    let count = 0;

    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
}

/**
 * ============================================================
 * PYTHON SOLUTION (REFERENCE)
 * ============================================================
 *
 * def hamming_weight(n):
 *
 *     count = 0
 *
 *     while n != 0:
 *         n = n & (n - 1)
 *         count += 1
 *
 *     return count
 *
 *
 * print(hamming_weight(11))           # 3
 * print(hamming_weight(128))          # 1
 * print(hamming_weight(2147483645))   # 30
 *
 *
 * Time Complexity:
 * O(k)  where k = number of set bits
 *
 * Space Complexity:
 * O(1)
 *
 * Note:
 * Python integers don't need unsigned shift handling
 * like JavaScript does, since Python has no fixed
 * bit-width integers.
 *
 */

/**
 * ============================================================
 * DRY RUN
 * ============================================================
 *
 * n = 11  →  binary 1011
 *
 * Iteration 1:
 * n & (n-1) = 1011 & 1010 = 1010   (10)
 * count = 1
 *
 * Iteration 2:
 * n & (n-1) = 1010 & 1001 = 1000   (8)
 * count = 2
 *
 * Iteration 3:
 * n & (n-1) = 1000 & 0111 = 0000   (0)
 * count = 3
 *
 * n = 0 → loop ends
 *
 * Result = 3
 *
 */

/**
 * ============================================================
 * FOLLOW UP: CALLED MANY TIMES — HOW TO OPTIMIZE?
 * ============================================================
 *
 * If this function is called repeatedly for many different
 * values of n, we can avoid recomputation using:
 *
 * 1. Memoization (cache results for already seen n)
 *
 * 2. Precompute using DP (like "Counting Bits" problem):
 *
 *    dp[i] = dp[i >> 1] + (i & 1)
 *
 *    This builds a lookup table for ALL numbers from
 *    0 to n in O(n) time, so each future query is O(1).
 *
 * Example (precompute table):
 *
 * function countBitsTable(maxN) {
 *     const dp = new Array(maxN + 1).fill(0);
 *
 *     for (let i = 1; i <= maxN; i++) {
 *         dp[i] = dp[i >> 1] + (i & 1);
 *     }
 *
 *     return dp;
 * }
 *
 * Now hammingWeight(n) becomes dp[n] → O(1) lookup.
 *
 * Best when the function is called MANY times
 * for values within a known range.
 *
 */

/**
 * ============================================================
 * INTERVIEW SUMMARY
 * ============================================================
 *
 * Pattern:
 *
 * Bit Manipulation
 *
 * Formula:
 *
 * n & (n - 1)  →  removes lowest set bit
 *
 * Key Observation:
 *
 * Brian Kernighan's trick skips all zero bits,
 * only loops once per SET bit.
 *
 * Complexity:
 *
 * Brute Force (check every bit):
 * O(32) → O(1)
 *
 * Optimal (Kernighan's):
 * O(k), k = number of set bits
 *
 * Space:
 * O(1)
 *
 * Memory Trick:
 *
 * "n & (n-1) kills the rightmost 1."
 *
 */

/**
 * ============================================================
 * EXAMPLE USAGE
 * ============================================================
 */

console.log("Brute Force (11):", hammingWeightBruteForce(11)); // 3
console.log("Optimal (11):", hammingWeight(11)); // 3
console.log("Optimal (128):", hammingWeight(128)); // 1
console.log("Optimal (2147483645):", hammingWeight(2147483645)); // 30
