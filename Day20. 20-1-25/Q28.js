function findDublicaterEmelment(arr){
   for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j]){
           console.log(arr[j]);
            return ;
        }
    }
   }
console.log(-1);
}
findDublicaterEmelment([1,1,2,3,4,5,3]);
findDublicaterEmelment([2,-1,-2,20,23,1,5,2]);
