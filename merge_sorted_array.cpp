#include <vector>
using namespace std;

/*
 * Merge Sorted Array (LeetCode 88)
 * 
 * Problem:
 * We have two sorted arrays: nums1 and nums2. nums1 has enough space 
 * at the end to accommodate all elements of nums2. The goal is to merge 
 * both arrays into a single sorted array inside nums1.
 * 
 * Approach:
 * - Start from the end of both arrays since the largest elements will be at the end.
 * - Compare the last elements of nums1 and nums2 and place the larger one 
 *   at the end of nums1.
 * - If there are remaining elements in nums2 after comparison, copy them over.
 * - This approach avoids using extra space and runs in O(m + n) time.
 */

class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m - 1;
        int j = n - 1;
        int k = m + n - 1;

        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }

        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }
    }
};
