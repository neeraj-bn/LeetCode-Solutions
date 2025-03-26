/*
287. Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. 
There is only one repeated number in nums, return this repeated number.

Constraints:
- 1 <= n <= 10^5
- nums.length == n + 1
- 1 <= nums[i] <= n
- All integers in nums appear only once except for precisely one integer which appears two or more times.

Follow-up:
1. How can we prove that at least one duplicate number must exist in nums?
2. Can you solve the problem in linear runtime complexity?

Approach:
- We use Floyd's Tortoise and Hare (Cycle Detection) algorithm to find the duplicate number.
- The idea is based on detecting a cycle in a linked-list-like structure where indices point to elements.
- The slow pointer moves one step at a time, while the fast pointer moves two steps.
- When slow and fast meet, we reset one pointer to the start and move both at the same pace until they meet again.
- The meeting point gives the duplicate number.
- This approach runs in O(n) time complexity and uses O(1) extra space.
*/

class Solution {
  public:
      int findDuplicate(vector<int>& nums) {
          int slow = nums[0];
          int fast = nums[0];
  
          // Phase 1: Detect cycle using Floyd's algorithm
          do {
              slow = nums[slow];
              fast = nums[nums[fast]];
          } while (slow != fast);
  
          // Phase 2: Find the entrance to the cycle (duplicate number)
          slow = nums[0];
          while (slow != fast) {
              slow = nums[slow];
              fast = nums[fast];
          }
  
          return slow;
      }
  };
  