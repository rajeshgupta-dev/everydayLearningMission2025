//Print w Pattern 
function printWPattern(n) {
    
    for(let i=0; i<n; i++){
    let temp=" ";
     
      for(let j=0; j<i; j++){
        temp+=" ";
      }
      temp+="\\";
      for(let j=0; j<2*(n-i-1); j++){
        temp+=" ";
      }
      temp+="/"
      for(let j=0; j<2*(i); j++){
        temp+=" ";
      }
      temp+="\\"
      for(let j=0; j<2*(n-i-1); j++){
        temp+=" ";
      }
    
      temp+="/";
    
    console.log(temp)
    }
  }
    printWPattern(4);

//    \      /\      /
//     \    /  \    /
//      \  /    \  /
//       \/      \/