/*
1) Problem: Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
2) For details: https://www.w3schools.com/jsref/jsref_filter.asp
3) The filter() method creates a new array filled with elements that pass a test provided by a function.
    The filter() method does not execute the function for empty elements.
    The filter() method does not change the original array.

*/

function bouncer(arr) {
  return arr.filter(Boolean);
}

const ans=bouncer([7, "ate", "", false, 9]);
console.log(ans);