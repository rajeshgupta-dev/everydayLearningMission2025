function cancateString(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let c = "";

  while (i >= 0 || j >= 0) {
    if (i >= 0) {
      c += a[i];
      i--;
    }
    if (j >= 0) {
      c += b[j];
      j--;
    }
  }
  console.log(c);
}
cancateString("rohanRam", "mohan"); // mnaaRhnoamhor
cancateString("rohan", "mohan"); // nnaahhoorm
cancateString("Ram", "mohan"); // mnaaRhom

