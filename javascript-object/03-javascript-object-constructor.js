/*
1) JavaScript object constructor.
2) Details: https://www.w3schools.com/js/js_object_constructors.asp
*/

function Person(first, last, age, height, weight) { //constructor function
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.height = height,
    this.weight = weight,
    this.bmi = function() {
        return this.weight/(this.height*this.height);
    }
}

const rahim = new Person("Muhammad", "Rahim", 30, 1.8, 75);
const karim = new Person("Md", "Karim", 40, 1.5, 60);
const sumi = new Person("Sumi", "Khatun", 32, 1.3, 43);

console.log(rahim.bmi());
rahim.country = "Bangladesh"; //we can't update "Person.country='Bangladesh'" to our constructor function.
console.log(rahim); //displaying all the property including newly added property "country".
console.log(karim); //"country" property will not add to karim object.
