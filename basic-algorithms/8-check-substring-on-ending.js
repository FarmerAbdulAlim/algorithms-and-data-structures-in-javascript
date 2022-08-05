function confirmEnding(str, target) {
  let n=str.length;
  let m=target.length;
  if(str.substring(n-m, n)==target){
    return true;
  }
  return false;
}

const ans=confirmEnding("Bastian", "n");
if(ans){
  console.log("The Substring is Found on End");
}
else{
  console.log("Sorry! The Substring is not Found on End");
}