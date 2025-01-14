//Q21. print Z pattern ;

function printZpattern(n) {

    for (let i = 1; i <= n; i++) {
        let temp = "";
        if (i === 1 || i === n) {
            for (let j = 1; j <= n; j++) {

                temp += "*" + " ";
            }
        } else {
            for (let j = n; j > i; j--) {
                temp += " " + " "
            }
            temp += "*"
        }
        console.log(temp);
    }
}
printZpattern(6);

// * * * * * *
//         *
//       *
//     *
//   *
// * * * * * *

// printZpattern(10);
// * * * * * * * * * *
//                 *
//               *
//             *
//           *
//         *
//       *
//     *
//   *
// * * * * * * * * * *

