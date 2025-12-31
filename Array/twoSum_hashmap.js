/**
 * 🔢 Problem: Two Sum
 *
 * Given an array of integers `nums` and an integer `target`,
 * return the indices of the two numbers such that they add up to `target`.
 *
 * You may assume that each input has exactly one solution,
 * and you may not use the same element twice.
 *
 * Example:
 * nums = [2, 7, 11, 15]
 * target = 9
 * Output: [0, 1]
 */

/**
 * 🧠 Thinking Process:
 *
 * - Brute force solution uses two loops (O(n²)) → slow
 * - We can optimize by remembering numbers we have already seen
 * - For each number, calculate the value needed to reach the target
 * - If that needed value was seen before → solution found
 */

/**
 * 🔑 Pattern Used:
 *
 * Hash Map / Complement Pattern
 *
 * Formula:
 * current + needed = target
 * needed = target - current
 *
 * Steps:
 * 1. Loop through the array once
 * 2. For each number, find the needed value
 * 3. Check if the needed value exists in the map
 * 4. If yes → return indices
 * 5. If no → store current number with its index
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var twoSum = function (nums, target) {
    // Map to store numbers we have seen
    // key   → number
    // value → index
    const map = new Map();

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the needed number to reach target
        let needed = target - nums[i];

        // Check if needed number already exists in map
        if (map.has(needed)) {
            // If found, return indices
            return [map.get(needed), i];
        }

        // Store current number with its index
        map.set(nums[i], i);
    }
};
