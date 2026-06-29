/**
 * ============================================================
 * 15. 3Sum
 * ============================================================
 *
 * Problem:
 *
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]]
 * such that:
 *
 * nums[i] + nums[j] + nums[k] == 0
 *
 * and
 *
 * i != j
 * i != k
 * j != k
 *
 * The solution set must NOT contain duplicate triplets.
 *
 * Example:
 *
 * Input:
 * [-1,0,1,2,-1,-4]
 *
 * Output:
 * [
 *   [-1,-1,2],
 *   [-1,0,1]
 * ]
 *
 * ============================================================
 * PATTERN
 * ============================================================
 *
 * Sort + Two Pointers
 *
 * General Formula:
 *
 * 3Sum
 * =
 * Fix One Number
 * +
 * Solve 2Sum
 *
 * ------------------------------------------------------------
 * When to use this pattern?
 * ------------------------------------------------------------
 *
 * Array
 * +
 * Target Sum
 * +
 * Need Unique Combinations
 *
 * Think:
 *
 * Sort Array
 * +
 * Two Pointers
 *
 * ============================================================
 * APPROACH 1: Brute Force
 * ============================================================
 *
 * Idea:
 *
 * Try every possible triplet.
 *
 * i
 * j
 * k
 *
 * Check:
 *
 * nums[i] + nums[j] + nums[k] == 0
 *
 * Use Set to remove duplicates.
 *
 * Time Complexity:
 * O(n³)
 *
 * Space Complexity:
 * O(number of unique triplets)
 */

function threeSumBruteForce(nums) {
    const result = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

                    result.add(JSON.stringify(triplet)); //JSON.stringify() is used because JavaScript Set cannot detect duplicate arrays by value. Arrays are reference types, so two arrays with the same elements are considered different objects. Converting the triplet to a string allows the Set to remove duplicates based on content rather than reference.
                }
            }
        }
    }

    //We use Set to remove duplicate triplets. Since arrays are reference types, Set cannot detect duplicate arrays by value. Therefore, we convert each triplet to a string using JSON.stringify(), store it in the Set, and later convert it back to an array using JSON.parse().

    return [...result].map((item) => JSON.parse(item)); //Because after using JSON.stringify(), the Set contains strings, not arrays.
}

/**
 * ============================================================
 * APPROACH 2: Optimal
 * ============================================================
 *
 * Pattern:
 *
 * Sort + Two Pointers
 *
 * ------------------------------------------------------------
 * IDEA
 * ------------------------------------------------------------
 *
 * Step 1:
 * Sort array
 *
 * Example:
 *
 * [-4,-1,-1,0,1,2]
 *
 * Step 2:
 * Fix one number
 *
 * nums[i]
 *
 * Step 3:
 * Find remaining two numbers using:
 *
 * left pointer
 * right pointer
 *
 * ------------------------------------------------------------
 * POINTER RULES
 * ------------------------------------------------------------
 *
 * sum = nums[i] + nums[left] + nums[right]
 *
 * If sum < 0
 *      left++
 *
 * Need bigger value
 *
 * If sum > 0
 *      right--
 *
 * Need smaller value
 *
 * If sum == 0
 *      save answer
 *      move both pointers
 *      skip duplicates
 *
 * ------------------------------------------------------------
 * WHY SORT?
 * ------------------------------------------------------------
 *
 * Sorted array lets us know:
 *
 * Move left
 * =>
 * Bigger value
 *
 * Move right
 * =>
 * Smaller value
 *
 * ------------------------------------------------------------
 * DUPLICATE HANDLING
 * ------------------------------------------------------------
 *
 * Skip duplicate i values:
 *
 * [-4,-1,-1,0,1,2]
 *        ^
 *
 * We already processed -1.
 *
 * Skip duplicate left/right values:
 *
 * Prevent duplicate triplets in output.
 *
 * ------------------------------------------------------------
 * TIME COMPLEXITY
 * ------------------------------------------------------------
 *
 * O(n²)
 *
 * Outer loop:
 * O(n)
 *
 * Two pointers:
 * O(n)
 *
 * Total:
 * O(n²)
 *
 * ------------------------------------------------------------
 * SPACE COMPLEXITY
 * ------------------------------------------------------------
 *
 * O(1)
 *
 * Ignoring output array.
 */

function threeSum(nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate first value
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                // Skip duplicate left values
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                // Skip duplicate right values
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

/**
 * ============================================================
 * DRY RUN
 * ============================================================
 *
 * Input:
 *
 * [-1,0,1,2,-1,-4]
 *
 * Sort:
 *
 * [-4,-1,-1,0,1,2]
 *
 * i = -1
 *
 * left = -1
 * right = 2
 *
 * sum = 0
 *
 * Found:
 *
 * [-1,-1,2]
 *
 * Move pointers
 *
 * left = 0
 * right = 1
 *
 * sum = 0
 *
 * Found:
 *
 * [-1,0,1]
 *
 * Answer:
 *
 * [
 *   [-1,-1,2],
 *   [-1,0,1]
 * ]
 */

/**
 * ============================================================
 * PATTERN SUMMARY
 * ============================================================
 *
 * Pattern:
 *
 * Sort + Two Pointers
 *
 * Memory Trick:
 *
 * 3Sum
 * =
 * Fix One Number
 * +
 * Solve 2Sum
 *
 * Steps:
 *
 * 1. Sort array
 *
 * 2. Fix one number
 *
 * 3. left = i + 1
 *    right = last index
 *
 * 4. Calculate sum
 *
 *    sum < 0
 *       left++
 *
 *    sum > 0
 *       right--
 *
 *    sum == 0
 *       save answer
 *
 * 5. Skip duplicates
 *
 * Key:
 *
 * Sorted array allows
 * intelligent pointer movement.
 */

/**
 * ============================================================
 * Example Usage
 * ============================================================
 */

const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));

// Output:
// [
//   [-1, -1, 2],
//   [-1, 0, 1]
// ]
