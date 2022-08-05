function repeatStringNumTimes(str, num) {
  if(num<=0){
    return "";
  }
  else {
    let res=str;
    for(let i=1; i<num; i++){
      res+=str;
    }
    return res;
  }
}

const ans=repeatStringNumTimes("abc", 3);
console.log(ans);