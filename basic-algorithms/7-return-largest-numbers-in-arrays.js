function largestOfFour(arr) {
  const a=[];
  for(let i=0; i<arr.length; i++){
    let maxElement=-100000009;
    for(let j=0; j<arr[i].length; j++){
      maxElement=Math.max(maxElement, arr[i][j]);
    }
    a.push(maxElement);
  }

  return a;
}

const ans=largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(ans);