/**
 * LeetCode 217 - Contains Duplicate
 *
 * Problem:
 * Given an integer array nums, return true if any value appears
 * at least twice in the array, otherwise return false.
 *
 * Approach:
 * We use a Set to keep track of numbers we have already seen.
 * A Set allows O(1) average-time lookups.
 *
 * If we encounter a number that already exists in the Set,
 * it means a duplicate is found.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // Create a Set to store elements we have seen so far
    const seen = new Set();

    // Traverse each number in the array
    for (let num of nums) {
        // Check if the number already exists in the Set
        // If yes, a duplicate is found
        if (seen.has(num)) {
            return true;
        }

        // Otherwise, add the number to the Set
        seen.add(num);
    }

    // If no duplicates were found after checking all elements
    return false;
};

/*
Time Complexity:
- O(n), where n is the length of the array.
- Each lookup and insert operation in a Set is O(1) on average.

Space Complexity:
- O(n) in the worst case when all elements are unique.

Pattern Used:
- Hashing / Seen-Before Pattern
- Useful when checking duplicates, uniqueness, or repeated elements.
*/
