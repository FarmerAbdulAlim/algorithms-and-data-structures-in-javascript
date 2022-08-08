/*
1) A closure is a function having access to the parent scope, even after the parent function has closed.
2) JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures.
3) Details: https://www.w3schools.com/Js/js_function_closures.asp
*/

function temporary() {
    let counter=0;
    return function() {
        counter=counter+1;
        return counter;
    }
}

const add = temporary(); //now add is a function.

add(); // counter=1;
add(); //counter=2;
const ans = add(); //counter=3;
console.log(ans);

