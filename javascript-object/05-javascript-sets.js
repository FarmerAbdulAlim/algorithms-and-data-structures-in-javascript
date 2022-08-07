/*
1) A JavaScript Set is a collection of unique values.
2) 
*/
const n = new Set([10, 15, 20, 25, 30]);
console.log(n.size); //size will be 5. Since, set contains only unique values.
const it = n.values(); // it will be an iterator.
n.add(35);
console.log(n.size);

for(let val of it){
    console.log(val);
}

console.log(n instanceof Set); //return true, since n is a set.