/*
 * 74. Search a 2D Matrix
 * 
 * Problem Statement:
 * You are given an m x n integer matrix with the following properties:
 * - Each row is sorted in non-decreasing order.
 * - The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target exists in the matrix, otherwise return false.
 * 
 * The solution must run in O(log(m * n)) time complexity.
 *
 * Example 1:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 *
 * Example 2:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * Output: false
 *
 * Constraints:
 * - 1 <= m, n <= 100
 * - -10^4 <= matrix[i][j], target <= 10^4
 *
 * Approach:
 * - We treat the 2D matrix as a 1D sorted array.
 * - Use binary search on this imaginary 1D array.
 * - Calculate row and column index using:
 *   - row = mid / n (integer division)
 *   - col = mid % n (modulus operation)
 * - If matrix[row][col] == target, return true.
 * - If matrix[row][col] < target, search in the right half.
 * - Otherwise, search in the left half.
 */

 #include <vector>
 using namespace std;
 
 class Solution {
 public:
     bool searchMatrix(vector<vector<int>>& matrix, int target) {
         if (matrix.empty() || matrix[0].empty()) return false;
         int m = matrix.size();     
         int n = matrix[0].size();
         int low=0;
         int high=m*n-1;
         while(low<=high){
             int mid=(low+high)/2;
             int row=mid/n;
             int col=mid%n;
             if(matrix[row][col]==target)return true;
             else if(matrix[row][col]<target) low=mid+1;
             else high=mid-1;
         }
         return false;
     }
 };
 