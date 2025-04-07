/*
121. Best Time to Buy and Sell Stock

Problem Statement:
You are given an array 'prices' where prices[i] represents the price of a given stock on the i-th day.
You need to determine the maximum profit that can be achieved by buying on one day and selling on a later day.
If no profit can be made, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: No transactions are done, max profit = 0.

Constraints:
1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4

Approach:
1. Initialize `min` to the first element of `prices`, representing the minimum price encountered so far.
2. Initialize `maxProf` to 0, representing the maximum profit found so far.
3. Traverse the array:
   - Calculate the profit if we sell on the current day: `profit = prices[i] - min`.
   - If `prices[i]` is lower than `min`, update `min` (as we want to buy at the lowest price).
   - If `profit` is greater than `maxProf`, update `maxProf`.
4. Return `maxProf` as the result.

Time Complexity: O(n) (Single pass through the array)
Space Complexity: O(1) (Constant extra space used)
*/

class Solution {
  public:
      int maxProfit(vector<int>& prices) {
          int n = size(prices);
          int min = prices[0];  // Stores the minimum price encountered so far
          int maxProf = 0;  // Stores the maximum profit
  
          for(int i = 0; i < n; i++) {
              int prof = prices[i] - min;  // Calculate profit if selling on day i
              
              if(prices[i] < min) {  
                  min = prices[i];  // Update min price if a lower price is found
              }
              
              if(prof > maxProf) {  
                  maxProf = prof;  // Update max profit if a higher profit is found
              }
          }
         
          return maxProf;  // Return the maximum profit found
      }
  };
  
