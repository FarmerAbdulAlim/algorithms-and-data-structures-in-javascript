/* 
1) Read this article to see another two methods to reverse a string.
https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString('hello'));