// Find the max and min number in array

// 1. Without using buid - in method 
function maxAndMin(arr){
    
    let max = arr[0];
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] >= max){
          
            max = arr[i];
        }
        if(arr[i] <= min){
            min = arr[i];
       
        }
    }
    console.log("max :",max,"Min :",min);

    // Using Build-in methods

    let Max = Math.max(...arr);
    let Min = Math.min(...arr);
    console.log(`Max : ${Max},Min : ${Min}`);
}
maxAndMin([1,2,3,4,5,6,7,8,-9,0,-234,12038]);
maxAndMin([-1,-2,-34,20,-999,909]);
maxAndMin([-9087,98554,2345,-49386]);