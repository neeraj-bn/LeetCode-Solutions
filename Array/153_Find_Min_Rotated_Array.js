/**
 * 153. Find Minimum in Rotated Sorted Array
 *
 * Problem:
 * Given a sorted array that is rotated, find the minimum element.
 *
 * Example:
 * nums = [4,5,6,7,0,1,2]
 * Output = 0
 *
 * ------------------------------------------------------------
 * 💬 Tell to Interviewer:
 * ------------------------------------------------------------
 * "Brute force can be done in O(n) by scanning the array.
 * But since the array is sorted and rotated,
 * I will use Binary Search to optimize it to O(log n)."
 *
 * ------------------------------------------------------------
 * APPROACH 1: Brute Force
 * ------------------------------------------------------------
 *
 * Time: O(n)
 * Space: O(1)
 */

function findMin_Brute(nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
    }

    return min;
}

/**
 * ------------------------------------------------------------
 * APPROACH 2: Better (Find Dip)
 * ------------------------------------------------------------
 *
 * Idea:
 * Find where order breaks:
 * nums[i] > nums[i+1] → dip found
 *
 * Time: O(n)
 * Space: O(1)
 */

function findMin_Better(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return nums[i + 1];
        }
    }
    return nums[0];
}

/**
 * ------------------------------------------------------------
 * APPROACH 3: Optimal (Binary Search)
 * ------------------------------------------------------------
 *
 * 🔥 CORE IDEA (VERY IMPORTANT)
 *
 * We check:
 * ---------
 * mid → right
 *
 * Case 1:
 * nums[mid] <= nums[right]
 *
 * 👉 Mid → Right is SORTED (no problem)
 * 👉 So dip is NOT here
 * 👉 Problem is on LEFT side
 *
 * -----------------------------------------
 * Case 2:
 * nums[mid] > nums[right]
 *
 * 👉 Mid → Right is NOT sorted (problem here)
 * 👉 There is a DIP in this region
 * 👉 Minimum is on RIGHT side
 *
 * ------------------------------------------------------------
 * Time: O(log n)
 * Space: O(1)
 */

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // ❌ NOT sorted → problem → DIP exists → go RIGHT
            left = mid + 1;
        } else {
            // ✅ sorted → no problem → go LEFT
            right = mid;
        }
    }

    return nums[left];
}

/**
 * ------------------------------------------------------------
 * 💡 THINK LIKE THIS
 * ------------------------------------------------------------
 *
 * Example:
 * [4,5,6,7,0,1,2]
 *
 * BIG BIG BIG | SMALL SMALL SMALL
 *               ↑
 *              DIP (minimum)
 *
 * You are NOT finding minimum directly.
 * You are finding the DIP (break point).
 *
 * ------------------------------------------------------------
 * 🧠 SIMPLE RULE
 * ------------------------------------------------------------
 *
 * Check mid → right:
 *
 * ✔ If sorted → no problem → go LEFT
 * ❌ If not sorted → problem → DIP → go RIGHT
 *
 * ------------------------------------------------------------
 * PATTERN: Binary Search on Rotated Array
 * ------------------------------------------------------------
 *
 * Idea:
 * - Array split into 2 sorted parts
 * - One side always sorted
 * - Find the UNSORTED side (contains dip)
 *
 * ------------------------------------------------------------
 * 🔑 KEY POINTS
 * ------------------------------------------------------------
 *
 * - while (left < right)
 * - never remove possible answer
 * - right = mid (keep mid safe)
 * - left = mid + 1 (skip mid when sure)
 *
 * ------------------------------------------------------------
 * 🚀 ONE LINE MEMORY
 * ------------------------------------------------------------
 *
 * "Sorted → no problem → go left
 *  Not sorted → problem → go right"
 *
 */
