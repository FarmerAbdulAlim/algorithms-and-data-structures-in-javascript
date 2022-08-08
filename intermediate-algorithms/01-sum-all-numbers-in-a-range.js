/*
1) Problem: Given an array with 2 numbers. Output should be the sum of range of two numbers. The lowest number will not always come first.
Sample Input: [4, 7]
Sample Output: 22
Output Explanation: 4+5+6+7=22

*/

function sumAll(arr) {
  arr.sort((a, b) => a-b);
  let x = (arr[1]*(arr[1]+1))/2;
  let y = (arr[0]*(arr[0]-1))/2;
  return x-y;
}

console.log(sumAll([4, 7]));