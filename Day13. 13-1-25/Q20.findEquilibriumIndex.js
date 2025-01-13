// find the equilibrium index of an array

function chekcEquilibrium(arr){
    let n=arr.length;
    // Left Side 
    for(let i=1; i<=n; i++){
        let leftSide=0;
        for(let j=i-1; j>=0; j--){
            leftSide=leftSide+arr[j];
        }
        // Right Side 
        let rightSide=0;
        for(let j=i+1; j<n; j++){
            rightSide=rightSide+arr[j]
        }
        if(leftSide==rightSide){
            console.log(`index ${i} Elment is ${arr[i]}`);
            return
        }
    }
    console.log(-1)
}
chekcEquilibrium([1, 2, 3, 4, 6]); // index 3 Elment is 4
chekcEquilibrium([1,2,3,4,6,7])   // -1
chekcEquilibrium([12,1,2,15,5,10,3,7,5,3,2]) // index 4 Elment is 5
