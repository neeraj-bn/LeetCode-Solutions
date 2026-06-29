/**
 * 238. Product of Array Except Self
 *
 * Problem:
 * Given an integer array nums, return an array answer such that
 * answer[i] is the product of all the elements of nums except nums[i].
 *
 * Constraints:
 * - Do NOT use division
 * - Time complexity must be O(n)
 *
 * Pattern:
 * Prefix & Suffix Product
 *
 * ------------------------------------------------------------
 * APPROACH 1: Using Separate Prefix & Suffix Arrays
 * ------------------------------------------------------------
 *
 * Idea:
 * prefix[i] -> product of all elements before index i
 * suffix[i] -> product of all elements after index i
 *
 * answer[i] = prefix[i] * suffix[i]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function productExceptSelf_PrefixSuffix(nums) {
    const n = nums.length;

    const prefix = new Array(n);
    const suffix = new Array(n);
    const result = new Array(n);
    [1, 2, 3, 4];
    // Build prefix product array
    prefix[0] = 1;
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // Build suffix product array
    suffix[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    // Build result array
    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
}

/**
 * ------------------------------------------------------------
 * APPROACH 2: Optimized Space (O(1) Extra Space)
 * ------------------------------------------------------------
 *
 * Idea:
 * - Store prefix products directly in result array
 * - Use one variable to track suffix product
 *
 * Output array does NOT count as extra space.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function productExceptSelf_Optimized(nums) {
    const n = nums.length;
    const result = new Array(n);

    // Step 1: Store prefix products in result array
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Step 2: Multiply with suffix products
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
}

/**
 * Example Usage:
 *
 * const nums = [1, 2, 3, 4];
 * console.log(productExceptSelf_PrefixSuffix(nums)); // [24, 12, 8, 6]
 * console.log(productExceptSelf_Optimized(nums));    // [24, 12, 8, 6]
 */

/**
 * PATTERN: Prefix & Suffix (Left–Right Product)
 *
 * Idea:
 * For every index i:
 * answer[i] = product of LEFT side * product of RIGHT side
 *
 * In simple words:
 * "Everything except me = left × right"
 *
 * When to use:
 * - "except self" problems
 * - division is NOT allowed
 * - need result for each index
 *
 * Steps:
 * 1. Build prefix (left product)
 * 2. Build suffix (right product)
 * 3. Multiply both
 *
 * Optimized:
 * - Store prefix in result
 * - Traverse from right using suffix variable
 *
 * Key:
 * Break → Left + Right → Combine
 */





