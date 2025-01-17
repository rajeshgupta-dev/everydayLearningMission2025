// V pattern
function patternOfV(n){
    for(let i=1; i<=n; i++){
             let temp="";
            for(let j=1; j<=n*2; j++){
              if(j == i){
                temp+="\\"
              }else{
                temp+=" ";
              }
              if((n*2-i) == j){
                temp+="/"
              }
            }
            console.log(temp);
           }   
  }
  patternOfV(4);

  // \      / 
  //  \    /  
  //   \  /
  //    \/