/*
1) Details: https://www.w3schools.com/Js/js_function_definition.asp
*/

//Normal Function Declaration

function add(a, b) {
    return a+b;
}
console.log(add(5,7)); //calling the function add()

/*Function Expressions.
A JavaScript function can also be defined using an expression.
A function expression can be stored in a variable.
*/
const x = function(a, b) {return a*b};
console.log(x(3, 5)); //calling the function x()

/*Self-Invoking Functions.
A self-invoking expression is invoked (started) automatically, without being called.
The function below is actually an anonymous self-invoking function (function without name).
This type of function is also called IIFE: Immediately Invoked Function Expression.
*/

(function () {
    let x = "Hello World!!";  // I will invoke myself
})();

/*
Arrow Function.
Arrow functions allows a short syntax for writing function expressions.
You don't need the function keyword, the return keyword, and the curly brackets.
 ES5:
var c = function(a, b) {
  return a * b;
}
 ES6:
const c = (a, b) => a * b;
You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them.
*/

const c = (a, b) => { return a * b };
console.log(c(8, 5));