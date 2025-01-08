// find the Element who touch only border , in 2D array 
function matrixBorder(n){
    let borderElement='';
    for(let i=0; i<n.length; i++){
    for(let j=0; j<n[i].length; j++){
      if(i==0 || i==n.length-1 || j==0 || j==n[i].length-1 )
        borderElement+=n[i][j]+" ";
    }
    
  }
  console.log(borderElement);
  
  }
  let matrix=[
    [1,2,3,4],
    [4,5,6,9],
    [7,8,9,6],
    [7,8,9,6]
   
  ]
  matrixBorder(matrix)
  