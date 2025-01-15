// A pattern 
function printApattern(n) {

    let middlePart = Math.floor(n / 2);
    
    for (let i = 1; i <= n; i++) {
        let temp = "";
        for (let j = n; j >= i; j--) {
            temp += " "
        }

        temp += "*"   // 1st line star
        for (let j = 1; j <= (i - 1) * 2-1; j++) {
            // middle row star
            if (i === middlePart+1) {
                for (let k = j; k <= j; k++) {
                    temp += "*"  
                }
            } else {
                temp += " "  // midlle spaces
            }
        }

        if(i!==1){
        temp += "*"  // last line star
        }

        console.log(temp);
    }
}
printApattern(4);

//    *
//   * *
//  *****
// *     *

printApattern(10)

//            *
//           * *
//          *   *
//         *     *
//        *       *
//       ***********
//      *           *
//     *             *
//    *               *
//   *                 *
