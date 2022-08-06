/*
1) In JavaScript, objects are king. If you understand objects, you understand JavaScript.
2) Details: https://www.w3schools.com/js/js_object_definition.asp
*/

//Creating a simple JavaScript object.

const person = {
    firstName: "Abdul",
    lastName: "Alim",
    age: 30,
    hobby: ["Travelling", "Fishing", "Gardening", "Farming"],
    profession: "Full Stack Web Developer"
}

console.log(person); //displaying our object.
person.country = "Bangladesh"; //adding a new property "country" to our object "person".
console.log(person); //now displaying our updated object.
console.log(person.profession); //displaying the value of profession property.
console.log(person.hobby); ////displaying the value of hobby property.
