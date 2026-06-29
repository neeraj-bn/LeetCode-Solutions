/**
 * 33. Search in Rotated Sorted Array
 *
 * Problem:
 * Given a rotated sorted array and a target,
 * return the index of target.
 * If not found, return -1.
 *
 * ------------------------------------------------------------
 * Example:
 * ------------------------------------------------------------
 *
 * nums   = [4,5,6,7,0,1,2]
 * target = 0
 *
 * Output = 4
 *
 * ------------------------------------------------------------
 * 💬 Tell to Interviewer:
 * ------------------------------------------------------------
 *
 * "Brute force can be done in O(n) by scanning the array.
 * But since the array is sorted and rotated,
 * we can use modified Binary Search to optimize it to O(log n)."
 *
 * ------------------------------------------------------------
 * APPROACH 1: Brute Force
 * ------------------------------------------------------------
 *
 * Time: O(n)
 * Space: O(1)
 */

function search_Brute(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    return -1;
}

/**
 * ------------------------------------------------------------
 * APPROACH 2: Optimal (Modified Binary Search)
 * ------------------------------------------------------------
 *
 * 🔥 CORE IDEA
 * ------------------------------------------------------------
 *
 * Rotated array looks like:
 *
 * BIG BIG BIG | SMALL SMALL SMALL
 *
 * Example:
 * [4,5,6,7 | 0,1,2]
 *
 * Array is NOT fully sorted.
 *
 * So normal Binary Search cannot work directly.
 *
 * ------------------------------------------------------------
 * IMPORTANT OBSERVATION
 * ------------------------------------------------------------
 *
 * At every step:
 *
 * ✅ ONE HALF is ALWAYS SORTED
 *
 * Either:
 * - LEFT half sorted
 * OR
 * - RIGHT half sorted
 *
 * ------------------------------------------------------------
 * GOAL
 * ------------------------------------------------------------
 *
 * 1. Find which side is sorted
 * 2. Check if target belongs there
 * 3. Eliminate the other half
 *
 * ------------------------------------------------------------
 * CASE 1:
 * nums[left] <= nums[mid]
 * ------------------------------------------------------------
 *
 * LEFT side sorted
 *
 * Example:
 *
 * [4,5,6,7 | 0,1,2]
 *  L    M
 *
 * LEFT side:
 * [4,5,6,7]
 *
 * ------------------------------------------------------------
 * Now check:
 * ------------------------------------------------------------
 *
 * Is target inside:
 *
 * nums[left] <= target < nums[mid]
 *
 * YES:
 * → search LEFT
 *
 * NO:
 * → search RIGHT
 *
 * ------------------------------------------------------------
 * CASE 2:
 * nums[left] > nums[mid]
 * ------------------------------------------------------------
 *
 * RIGHT side sorted
 *
 * Example:
 *
 * [6,7 | 0,1,2,4,5]
 *        M       R
 *
 * RIGHT side:
 * [0,1,2,4,5]
 *
 * ------------------------------------------------------------
 * Now check:
 * ------------------------------------------------------------
 *
 * Is target inside:
 *
 * nums[mid] < target <= nums[right]
 *
 * YES:
 * → search RIGHT
 *
 * NO:
 * → search LEFT
 *
 * ------------------------------------------------------------
 * Time: O(log n)
 * Space: O(1)
 */

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    /**
     * Invariant:
     * If target exists,
     * it is always inside [left, right]
     */

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // ✅ target found
        if (nums[mid] === target) {
            return mid;
        }

        /**
         * ------------------------------------------------
         * CASE 1:
         * LEFT HALF SORTED
         * ------------------------------------------------
         */

        if (nums[left] <= nums[mid]) {
            /**
             * Check whether target belongs
             * to LEFT sorted half
             */

            if (target >= nums[left] && target < nums[mid]) {
                // ✅ target inside LEFT half
                right = mid - 1;
            } else {
                // ❌ target not inside LEFT half
                left = mid + 1;
            }
        } else {
            /**
             * ------------------------------------------------
             * CASE 2:
             * RIGHT HALF SORTED
             * ------------------------------------------------
             */
            /**
             * Check whether target belongs
             * to RIGHT sorted half
             */

            if (target > nums[mid] && target <= nums[right]) {
                // ✅ target inside RIGHT half
                left = mid + 1;
            } else {
                // ❌ target not inside RIGHT half
                right = mid - 1;
            }
        }
    }

    // ❌ target not found
    return -1;
}

/**
 * ------------------------------------------------------------
 * 💡 THINK LIKE THIS
 * ------------------------------------------------------------
 *
 * Rotated array:
 *
 * BIG BIG BIG | SMALL SMALL SMALL
 *
 * One side always sorted.
 *
 * We use sorted side
 * to safely eliminate half array.
 *
 * ------------------------------------------------------------
 * 🧠 SIMPLE RULE
 * ------------------------------------------------------------
 *
 * 1. Find sorted side
 * 2. Check if target belongs there
 * 3. Else go opposite side
 *
 * ------------------------------------------------------------
 * 🔑 KEY POINTS
 * ------------------------------------------------------------
 *
 * - while(left <= right)
 * - one side always sorted
 * - use sorted side for decision
 * - eliminate half safely
 *
 * ------------------------------------------------------------
 * 🚀 ONE LINE MEMORY
 * ------------------------------------------------------------
 *
 * "Find sorted side,
 * check target range,
 * eliminate other half."
 *
 */
