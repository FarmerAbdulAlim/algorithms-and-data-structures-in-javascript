/*
1) Problem: Given a string. Convert this string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Sample Input: The_Andy_Griffith_Show
Sample Output: the-andy-griffith-show

Sample Input: thisIsSpinalTap
Sample Output: this-is-spinal-tap

Sample Input: Teletubbies say Eh-oh
Sample Output: AllThe-small Things
*/

function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

console.log(spinalCase('thisIsSpinalTap'));