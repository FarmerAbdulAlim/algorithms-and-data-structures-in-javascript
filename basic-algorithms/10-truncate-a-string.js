function truncateString(str, num) {
  if(num>=str.length) {
    return str;
  }
  else {
    let res=str.substring(0, num);
    res=res+"...";
    return res;
  }
}

const ans=truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(ans);