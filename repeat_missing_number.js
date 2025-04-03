/*
Problem Statement:
You are given a read-only array of 'n' integers from 1 to 'n'. Each integer appears exactly once except for one number which appears twice (A), and one number which is missing (B). Your task is to find and return A and B in an array where A precedes B.

Constraints:
- The solution should have linear runtime complexity.
- The solution should not use extra memory.
- Be cautious about integer overflow.

Example:
Input: [3, 1, 2, 5, 3]
Output: [3, 4]
Explanation: 3 is the repeated number, and 4 is the missing number.

Approach:
- Use mathematical formulas for sum and sum of squares to determine the missing and repeated numbers.
- The expected sum of numbers from 1 to n is given by `n * (n + 1) / 2`.
- The expected sum of squares is given by `n * (n + 1) * (2n + 1) / 6`.
- Compute the actual sum and sum of squares from the given array.
- Use these two equations to determine the missing and repeated numbers.
- Use BigInt to handle large numbers and avoid integer overflow.
*/

module.exports = {
  repeatedNumber: function(A) {
      const n = BigInt(A.length);
      let sumActual = BigInt(0), sumSquaresActual = BigInt(0);
      let sumExpected = (n * (n + BigInt(1))) / BigInt(2);
      let sumSquaresExpected = (n * (n + BigInt(1)) * (BigInt(2) * n + BigInt(1))) / BigInt(6);

      for (let i = 0; i < A.length; i++) {
          let num = BigInt(A[i]); 
          sumActual += num;
          sumSquaresActual += num * num;
      }

      const diff1 = sumActual - sumExpected;  // A - B
      const diff2 = (sumSquaresActual - sumSquaresExpected) / diff1;  // A + B

      const x = (diff1 + diff2) / BigInt(2);  // Repeated Number (A)
      const y = x - diff1;  // Missing Number (B)

      return [Number(x), Number(y)];  
  }
};
