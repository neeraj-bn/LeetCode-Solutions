/**
 * ============================================================
 * 11. Container With Most Water
 * ============================================================
 *
 * Problem:
 *
 * Given an integer array height.
 *
 * Find two lines that together with the x-axis form a container
 * that holds the maximum amount of water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Example:
 *
 * Input:
 * [1,8,6,2,5,4,8,3,7]
 *
 * Output:
 * 49
 *
 * ============================================================
 * HOW TO THINK?
 * ============================================================
 *
 * Water stored depends on:
 *
 * Area = Height × Width
 *
 * Height:
 * min(height[left], height[right])
 *
 * Width:
 * right - left
 *
 * Why minimum?
 *
 * Water spills from the shorter wall.
 *
 * Example:
 *
 * Height = 8 and 7
 *
 * Water level can only reach 7.
 *
 * ============================================================
 * PATTERN
 * ============================================================
 *
 * Two Pointers
 *
 * General Pattern:
 *
 * Array
 * +
 * Need Max / Min Answer
 * +
 * Answer depends on Left & Right side
 *
 * Think:
 *
 * Two Pointers
 *
 * Similar Problems:
 *
 * - Two Sum II
 * - 3Sum
 * - Container With Most Water
 * - Trapping Rain Water
 *
 * ============================================================
 * APPROACH 1 : BRUTE FORCE
 * ============================================================
 *
 * Idea:
 *
 * Check every pair.
 *
 * Calculate area.
 *
 * Keep maximum.
 *
 * Time Complexity:
 * O(n²)
 *
 * Space Complexity:
 * O(1)
 */

function maxAreaBruteForce(height) {
    let maxArea = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const width = j - i;

            const area = Math.min(height[i], height[j]) * width;

            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
}

/**
 * ============================================================
 * APPROACH 2 : OPTIMAL
 * ============================================================
 *
 * Pattern:
 *
 * Two Pointers
 *
 * Idea:
 *
 * left = 0
 * right = n - 1
 *
 * Calculate area.
 *
 * Move smaller wall.
 *
 * Why?
 *
 * Area =
 *
 * min(leftHeight, rightHeight)
 * *
 * width
 *
 * Smaller wall limits water.
 *
 * Moving larger wall cannot increase
 * the minimum height.
 *
 * Therefore:
 *
 * Move smaller wall.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)
 */

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;

    while (left < right) {
        const width = right - left;

        const area = Math.min(height[left], height[right]) * width;

        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

/**
 * ============================================================
 * PYTHON SOLUTION (REFERENCE)
 * ============================================================
 *
 * def max_area(height):
 *
 *     left = 0
 *     right = len(height) - 1
 *
 *     max_area = 0
 *
 *     while left < right:
 *
 *         area = min(
 *             height[left],
 *             height[right]
 *         ) * (right - left)
 *
 *         max_area = max(max_area, area)
 *
 *         if height[left] < height[right]:
 *             left += 1
 *         else:
 *             right -= 1
 *
 *     return max_area
 *
 *
 * height = [1,8,6,2,5,4,8,3,7]
 * print(max_area(height))
 *
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)
 *
 */

/**
 * ============================================================
 * DRY RUN
 * ============================================================
 *
 * height = [1,8,6,2,5,4,8,3,7]
 *
 * left = 0
 * right = 8
 *
 * area =
 * min(1,7) * 8
 *
 * = 8
 *
 * Move left
 *
 * ---------------------
 *
 * left = 1
 * right = 8
 *
 * area =
 * min(8,7) * 7
 *
 * = 49
 *
 * Maximum found
 *
 */

/**
 * ============================================================
 * INTERVIEW SUMMARY
 * ============================================================
 *
 * Pattern:
 *
 * Two Pointers
 *
 * Formula:
 *
 * Area =
 * min(height[left], height[right])
 * *
 * (right - left)
 *
 * Key Observation:
 *
 * Smaller wall limits water.
 *
 * Therefore:
 *
 * Move smaller wall.
 *
 * Complexity:
 *
 * Brute Force:
 * O(n²)
 *
 * Optimal:
 * O(n)
 *
 * Space:
 * O(1)
 *
 * Memory Trick:
 *
 * Width always decreases.
 *
 * To compensate,
 * we need a taller minimum height.
 *
 * Therefore:
 *
 * Move the smaller wall.
 *
 */

/**
 * ============================================================
 * EXAMPLE USAGE
 * ============================================================
 */

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log("Brute Force:", maxAreaBruteForce(height));
console.log("Optimal:", maxArea(height));
