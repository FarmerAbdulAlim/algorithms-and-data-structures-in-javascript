/*
1) Nested object.
*/
const person = {
    firstName: "Abdul",
    lastName: "Alim",
    age: 30,
    hobby: ["Travelling", "Fishing", "Gardening", "Farming"],
    profession: "Full Stack Web Developer",
    fullName: function() {
        return this.firstName+" "+this.lastName;
    },
    lifeStyle: {
        car: "BMW",
        clothBrand: "Easy",
        height: 1.73,
        weight: 60,
        shoeBrand: "Bata",
        bmi: function() {
            return this.weight/(this.height*this.height);
        }
    }
}

console.log(person); //displaying the whole object.
console.log(person.fullName()); //calling the fullName function.
console.log(person.lifeStyle.bmi()); //calling the BMI function in the nested object.