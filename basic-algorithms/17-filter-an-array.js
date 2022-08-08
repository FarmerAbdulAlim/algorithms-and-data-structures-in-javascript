/*
1) Problem: Given an array containing real numbers. Output an array containing the squares of positive numbers in the given array.
2) Sample Input: [-3, 4.8, 5, 3, -3.2]
   Sample Output: [25, 9]
*/

const squareList = arr => {
    return arr
            .filter(n => n>0 && Number.isInteger(n)==true)
            .map(n => n*n)
    ;
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);