/*
1) Java is an OOP based language, whereas JavaScript is a prototype based language.

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

//If we want to update Person() constructor from outside, then we can follow the below:
Person.prototype.country = "Bangladesh"; //Now, rahim, karim, sumi, they all have the new "country" property.
console.log(rahim.country);
console.log(sumi.country);
console.log(Person); //displaying the whole object, but we couldn't see our newly added property "country".
console.dir(Person); //Now we can see the "country" property in the "prototype" section in the chrome console.
