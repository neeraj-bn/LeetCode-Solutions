// File: maxProductSubarray.js

/*
====================================================
QUESTION:
Given an integer array nums, find a contiguous subarray
that has the largest product and return the product.
====================================================
*/

/*
====================================================
BRUTE FORCE APPROACH
====================================================
Time: O(n^2)
Space: O(1)
*/
function maxProductBrute(nums) {
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = i; j < nums.length; j++) {
            product *= nums[j];
            max = Math.max(max, product);
        }
    }

    return max;
}

/*
====================================================
BETTER APPROACH (PREFIX + SUFFIX)
====================================================
Time: O(n)
Space: O(1)
*/
function maxProduct(nums) {
    let n = nums.length;
    let pref = 1,
        suf = 1;
    let max = -Infinity;

    for (let i = 0; i < n; i++) {
        pref *= nums[i]; // left to right
        suf *= nums[n - 1 - i]; // right to left

        max = Math.max(max, pref, suf);

        // reset when zero breaks product
        if (pref === 0) pref = 1;
        if (suf === 0) suf = 1;
    }

    return max;
}

/*
====================================================
WHY USING THIS?
====================================================
- Negative numbers flip sign
- Odd negatives → need to remove left or right part
- Prefix handles removing right
- Suffix handles removing left
- Try both → get correct answer
*/

/*
====================================================
PATTERN IN THE PROBLEM
====================================================
- Subarray problem
- Optimization (max product)
- Kadane-like thinking (but for product)
*/

/*
====================================================
TIME & SPACE COMPLEXITY
====================================================
Brute Force:
Time: O(n^2)
Space: O(1)

Better (Prefix + Suffix):
Time: O(n)
Space: O(1)
*/

/*
====================================================
POINTS TO REMEMBER
====================================================
1. Negative × Negative = Positive
2. Odd negatives → drop one side
3. Prefix → removes right part (Right alli first Multiple aagatte ,so amel baro elements prduct less aagidre ; ignore aagatthe)
4. Suffix → removes left part
5. Zero breaks product → reset to 1
6. Use -Infinity for max initialization
*/

/*
====================================================
EXAMPLE TEST
====================================================
*/
const nums = [2, 3, -2, 4];

console.log("Brute:", maxProductBrute(nums));
console.log("Better:", maxProduct(nums));

/*
✅ Why prefix alone fails

Consider:

[-1, -2, -3]
🔹 Prefix products
-1
(-1 * -2) = 2
(2 * -3) = -6

👉 Max from prefix = 2

BUT actual answer is:

[-2, -3] = 6

❌ Prefix missed it.

🔥 Why suffix fixes this

Suffix scan goes from right → left.

🔹 Suffix products
-3
(-3 * -2) = 6
(6 * -1) = -6

👉 Now we get 6

🧠 Intuition

If array has:

odd number of negatives

then:
👉 either removing prefix negative
OR
👉 removing suffix negative

gives maximum product.

So we must check BOTH directions.*/
