function findLongestWordLength(str) {
  // split the string into individual words
  const words=str.split(" ");

  if(words.length==1){
    // words only has 1 element left that is the longest element
    return words[0].length;
  }
  else{
    // if words has multiple elements, remove the first element and recursively call the function.
    return Math.max(words[0].length, findLongestWordLength(words.slice(1).join(" ")));
  }
}

const ans=findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(ans);