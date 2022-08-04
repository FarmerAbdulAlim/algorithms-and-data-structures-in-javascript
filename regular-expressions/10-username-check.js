/*
1) Problem: Checking the username in the following conditions. 
2) Algorithm: Regular Expression.
3) Complexity: 
4) To practice Regular Expression , visit: https://regexr.com/
5) Condition-01: Usernames can only use alpha-numeric characters.
6) Condition-02: The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
7) Condition-03: Username letters can be lowercase and uppercase.
8) Condition-04: Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

const rx=/^[a-z]([a-z]+\d*|\d{2,})$/i;
const username="a111111";
if(rx.test(username)==true){
    console.log("Correct Username");
}
else {
    console.log("Wrong Username");
}