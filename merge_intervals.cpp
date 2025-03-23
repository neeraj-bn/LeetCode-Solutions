// Given an array of intervals, merge all overlapping intervals and return 
// an array of the non-overlapping intervals covering all input intervals.
//
// Approach:
// 1. Sort the intervals based on the start value.
// 2. Iterate through the intervals and merge overlapping ones.
// 3. If the current interval does not overlap, add it to the result.
// 4. Otherwise, merge by updating the end of the last interval in the result.

class Solution {
  public:
      vector<vector<int>> merge(vector<vector<int>>& intervals) {
          int n = intervals.size();
          sort(intervals.begin(), intervals.end());
          vector<vector<int>> ans;
          
          for (int i = 0; i < n; i++) {
              if (ans.empty() || intervals[i][0] > ans.back()[1]) {
                  ans.push_back(intervals[i]);
              } else {
                  ans.back()[1] = max(ans.back()[1], intervals[i][1]);
              }
          }
          return ans;
      }
  };
  