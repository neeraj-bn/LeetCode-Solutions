/**
 * ============================================================
 * 371. Sum of Two Integers
 * ============================================================
 *
 * Problem:
 *
 * Given two integers a and b.
 *
 * Return the sum of the two integers
 * without using the operators + and -.
 *
 * Example:
 *
 * Input:
 * a = 1, b = 2
 *
 * Output:
 * 3
 *
 * Input:
 * a = 2, b = 3
 *
 * Output:
 * 5
 *
 * Constraints:
 * -1000 <= a, b <= 1000
 *
 * ============================================================
 * HOW TO THINK?
 * ============================================================
 *
 * Since we cannot use + or -,
 * we need another way to add numbers.
 *
 * Computers add binary numbers using:
 *
 * XOR  → adds bits without carry
 * AND  → finds where a carry is generated
 * Shift Left → moves carry to the correct position
 *
 * Example (decimal 2 + 3):
 *
 * 2 = 010
 * 3 = 011
 *
 * Sum without carry (XOR):
 * 010 ^ 011 = 001
 *
 * Carry (AND, shifted left by 1):
 * (010 & 011) << 1 = 010 << 1 = 100
 *
 * Now add again:
 * 001 + 100 → repeat the process
 *
 * Keep repeating until carry becomes 0.
 *
 * ============================================================
 * PATTERN
 * ============================================================
 *
 * Bit Manipulation
 *
 * General Pattern:
 *
 * Addition without arithmetic operators
 * +
 * Need binary-level logic
 *
 * Think:
 *
 * XOR for sum, AND + shift for carry
 *
 * Similar Problems:
 *
 * - Add Binary
 * - Single Number
 * - Bitwise AND of Numbers Range
 * - Power of Two
 *
 * ============================================================
 * APPROACH 1 : BRUTE FORCE (NOT ALLOWED HERE, FOR REFERENCE ONLY)
 * ============================================================
 *
 * Idea:
 *
 * Normally we would just do:
 * return a + b
 *
 * But + is not allowed.
 *
 * So brute force does not apply here ---
 * this problem REQUIRES bit manipulation.
 *
 * ============================================================
 * APPROACH 2 : OPTIMAL (BIT MANIPULATION)
 * ============================================================
 *
 * Pattern:
 *
 * XOR + AND + Bit Shift
 *
 * Idea:
 *
 * while (b !== 0) {
 *     sum = a XOR b
 *     carry = (a AND b) << 1
 *     a = sum
 *     b = carry
 * }
 *
 * return a
 *
 * Why?
 *
 * XOR gives sum of bits ignoring carry.
 * AND gives the positions where a carry occurs.
 * Shifting left moves the carry to its correct place.
 *
 * Repeat until there is no carry left (b = 0).
 *
 * Note (JavaScript specific):
 *
 * JS bitwise operators work on 32-bit signed integers.
 * Use ">>> 0" carefully — here we don't need it because
 * constraints keep values within signed 32-bit range
 * and final XOR result stays correct.
 *
 * Time Complexity:
 * O(1)  (bounded by 32 bit shifts)
 *
 * Space Complexity:
 * O(1)
 */

function getSum(a, b) {
    while (b !== 0) {
        const sum = a ^ b;
        const carry = (a & b) << 1;

        a = sum;
        b = carry;
    }

    return a;
}

/**
 * ============================================================
 * PYTHON SOLUTION (REFERENCE)
 * ============================================================
 *
 * def get_sum(a, b):
 *
 *     mask = 0xFFFFFFFF
 *
 *     while b != 0:
 *         sum_ = (a ^ b) & mask
 *         carry = ((a & b) << 1) & mask
 *
 *         a = sum_
 *         b = carry
 *
 *     # handle negative numbers (Python ints are infinite precision)
 *     if a > 0x7FFFFFFF:
 *         a = ~(a ^ mask)
 *
 *     return a
 *
 *
 * print(get_sum(1, 2))   # 3
 * print(get_sum(2, 3))   # 5
 *
 *
 * Time Complexity:
 * O(1)
 *
 * Space Complexity:
 * O(1)
 *
 * Note:
 * Python needs a 32-bit mask because Python integers
 * don't naturally overflow/wrap like JS or other languages.
 *
 */

/**
 * ============================================================
 * DRY RUN
 * ============================================================
 *
 * a = 2, b = 3
 *
 * 2 = 010
 * 3 = 011
 *
 * Iteration 1:
 *
 * sum   = 010 ^ 011 = 001  (1)
 * carry = (010 & 011) << 1
 *       = 010 << 1
 *       = 100  (4)
 *
 * a = 1, b = 4
 *
 * ---------------------
 *
 * Iteration 2:
 *
 * 1 = 001
 * 4 = 100
 *
 * sum   = 001 ^ 100 = 101  (5)
 * carry = (001 & 100) << 1
 *       = 000 << 1
 *       = 0
 *
 * a = 5, b = 0
 *
 * b is 0 → loop ends
 *
 * Result = 5
 *
 */

/**
 * ============================================================
 * INTERVIEW SUMMARY
 * ============================================================
 *
 * Pattern:
 *
 * Bit Manipulation (XOR + AND + Shift)
 *
 * Formula:
 *
 * sum   = a XOR b
 * carry = (a AND b) << 1
 *
 * repeat until carry (b) = 0
 *
 * Key Observation:
 *
 * XOR adds bits without carry.
 * AND finds where carry occurs.
 * Left shift moves carry to correct bit position.
 *
 * Complexity:
 *
 * Time: O(1)  (max 32 iterations for 32-bit integers)
 * Space: O(1)
 *
 * Memory Trick:
 *
 * "XOR adds, AND carries, Shift moves the carry."
 *
 */

/**
 * ============================================================
 * EXAMPLE USAGE
 * ============================================================
 */

console.log("Sum (1, 2):", getSum(1, 2)); // 3
console.log("Sum (2, 3):", getSum(2, 3)); // 5
console.log("Sum (-2, 3):", getSum(-2, 3)); // 1
console.log("Sum (-5, -7):", getSum(-5, -7)); // -12
``;
