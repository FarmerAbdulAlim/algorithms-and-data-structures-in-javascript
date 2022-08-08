/*
1) Sum of array elements with reduce().
*/

const a = [10, 20, 30, 40, 50];
const sum = a.reduce((preValue, currValue) => {
    return preValue + currValue;
}, 0);

console.log(sum);