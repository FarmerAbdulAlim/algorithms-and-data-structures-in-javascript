/*
1) Problem: Sort an array.
2) Read: By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana").
          However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
            Because of this, the sort() method will produce incorrect result when sorting numbers.
            You can fix this by providing a compare function:
3) Details: https://www.w3schools.com/js/js_array_sort.asp
*/

function getIndexToIns(arr) {
  arr.sort(function(a,b){return a-b});
  return arr;
}

const ans=getIndexToIns([40, 60, 2, 8, 90]);
console.log(ans);