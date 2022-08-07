/*
1) A Map holds key-value pairs where the keys can be any datatype.
2) Details: https://www.w3schools.com/Js/js_object_maps.asp
*/

const arr = [["computer", 500], ["laptop", 900], ["drone", 2000]];
const mp = new Map(arr); //creating a map by passing an arr.
mp.set("camera", 950); //adding a new keys and values in the existing map.
mp.set("laptop", 1999); //update the existing values.
console.log(mp); //displaying the map.

console.log(mp.get("drone")); //The get() method gets the value of a key in a Map.

mp.delete("laptop");

//list all elements
let text="";
mp.forEach(function(value, key) {
    text+=key+" "+value+"\n";
})

console.log(text);