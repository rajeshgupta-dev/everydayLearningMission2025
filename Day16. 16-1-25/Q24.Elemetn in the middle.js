// find Middle Element whose right side ele is grates and left side small

function elementInMiddle(N,arr){
 
        for (let i = 1; i<N-1; i++) {
        
            let leftSide = true;
            let rightSide = true;
    
            for (let j=0; j<i; j++) {
                if (arr[j] > arr[i]) {
                    leftSide = false;
                    break;
                }
              }
    
        for (let j=i+1; j<N; j++) {
                if (arr[j] < arr[i]) {
                    rightSide = false;
                    break;
                }
            }
    
            if (leftSide && rightSide) {
                console.log(arr[i]);
                return;
            }
        }
    
        console.log(-1);
    
        
    }
    elementInMiddle(5,[1,2,4,5,6]); // 2
    elementInMiddle(5,[3,6,7,8,9])  // 6