// E pattern 

function E_Pattern(n) {

    if (n % 2 !== 0) {
        let a = Math.ceil(n / 2);   // half of n, for middle line
        for (let i = 1; i <= n; i++) {
            let temp = "";
            if ((i === 1 || i === n)) {     // upper and lower line
                for (let j = 1; j <= n; j++) {
                    temp += "*" + " "
                }

            }
            else {
                for (let j = 1; j <= n; j++) {  //1st right line | 
                    if (j === 1) {
                        temp += "*" + " "
                    }
                }
            }

            // Middle part
            if (i === a) {
                for (let j = 1; j < n - 1; j++) {
                    temp += "*" + ' '
                }
            }

            console.log(temp)
        }
    } else {
        console.log("For making E Pattern ,Please Enter Odd number")
    }



}
// E_Pattern(3);
// * * * 
// * * 
// * * *

// E_Pattern(5);

// * * * * * 
// * 
// * * * *
// *
// * * * * *

E_Pattern(7);
// * * * * * * *
// *
// *
// * * * * * *
// *
// *
// * * * * * * *
