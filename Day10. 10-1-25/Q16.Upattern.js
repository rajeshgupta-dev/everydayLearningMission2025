// U pattern 

function Upattern(n) {

    for (let i = 1; i <= n; i++) {
        let temp = "";

        if (i == n) {
            for (let j = 1; j <= n; j++) {
                temp += "*" + " "
            }
        } else {
            for (let j = 1; j <= n; j++) {
                if (j == 1 || j == n) {
                    temp += "*" + " "
                } else {
                    temp += "  "
                }
            }
        }
        console.log(temp)
    }
}
// Upattern(3);
// *   *
// *   *
// * * *

// Upattern(5);
// *       *
// *       *
// *       *
// *       *
// * * * * *

// Upattern(7)
// *           *
// *           *
// *           *
// *           *
// *           *
// *           *
// * * * * * * *