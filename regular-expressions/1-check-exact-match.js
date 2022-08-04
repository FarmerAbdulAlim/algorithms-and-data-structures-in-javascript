/*
1) Problem: Given a text, we have to find EXACT PATTERN(inside the \\) in the text. 
2) Algorithm: Regular Expression.
3) Complexity: 
4) To practice Regular Expression , visit: https://regexr.com/
*/

const text="Abdul Alim is a full time traveller.";
const myRegex=/full/; //exact match, case sensitive
if(myRegex.test(text)){
    console.log("Pattern is Found");
}
else{
    console.log("Sorry! Pattern is not Found");
}
