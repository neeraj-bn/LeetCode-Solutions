/*
Question:
You are given an `n x n` matrix. Rotate the matrix 90 degrees clockwise in place.

Example:
Input:  
[[15,13,2,5],  
 [14,3,4,1],  
 [12,6,8,9],  
 [16,7,10,11]]  

Output:  
[[16,12,14,15],  
 [7,6,3,13],  
 [10,8,4,2],  
 [11,9,1,5]]  

Solution Explanation:
1. **Transpose the matrix** - Swap elements across the diagonal (`matrix[i][j]` with `matrix[j][i]`).
2. **Reverse each row** - This gives the final rotated matrix.
*/

class Solution {
  public:
      void rotate(vector<vector<int>>& matrix) {
          int n = matrix.size();
          
          // Step 1: Transpose the matrix (swap across diagonal)
          for(int i = 0; i < n - 1; i++) {
              for(int j = i + 1; j < n; j++) {
                  swap(matrix[i][j], matrix[j][i]);
              }
          }
          
          // Step 2: Reverse each row
          for(int i = 0; i < n; i++) {
              reverse(matrix[i].begin(), matrix[i].end());
          }
      }
  };
  