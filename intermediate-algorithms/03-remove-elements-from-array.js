/*
1) Problem: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. You have to use the arguments object.

Sample Input: [1, 2, 3, 1, 2, 3], 2, 3
Sample Output: [1, 1]

Sample Input: ["traveller", "abdul", "alim", 12, 19], "traveller", 12
Sample Output: ["abdul", "alim", 19]
*/

function destroyer(arr) {
  let toRemove = Array.from(arguments).slice(1);
  return arr.filter(val => !toRemove.includes(val));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));