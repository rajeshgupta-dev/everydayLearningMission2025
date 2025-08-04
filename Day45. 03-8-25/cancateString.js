function cancateString(a, b) {
  // let i = a.length - 1;
  // let j = b.length - 1;
  // let c = "";

  // merze from end 
  // while (i >= 0 || j >= 0) {
  //   if (i >= 0) {
  //     c += a[i];
  //     i--;
  //   }
  //   if (j >= 0) {
  //     c += b[j];
  //     j--;
  //   }
  // }
  // console.log(c);

  // merze from start
  let i = 0;
  let j = 0;
  let res = "";
  while (i < a.length && j < b.length) {
    res += a[i] + b[j];
    i++;
    j++;
  }
  console.log(res + a.slice(i) + b.slice(j));
}
cancateString("rohanRam", "mohan"); //end -> mnaaRhnoamhor,start -> rmoohhaannRam
cancateString("rohan", "mohan");    //end -> nnaahhoorm ,  start ->  rmoohhaann
cancateString("Ram", "mohan");      //end -> mnaaRhom,     start ->  Rmaomhan

