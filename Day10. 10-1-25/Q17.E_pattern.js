// E pattern 

function E_Pattern(n) {

     if(n <= 0 || n === 1){
        console.log("Can't Jenerate E Pattern");
        return ;
     }
     if(n % 2 === 0){
        n = n+1;
     }
     
    if (n >= 2 && n <= 21) {
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
        console.log(n,"is large Number to Jenerate E pattern, The Number must be b/w 2 and 20.")
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

E_Pattern(-3);  // Can't Jenerate E Pattern
E_Pattern(0) ; // Can't Jenerate E Pattern
E_Pattern(1);  // Can't Jenerate E Pattern
E_Pattern(22); // 23 is large Number to Jenerate E pattern, The Number must be b/w 2 and 20.
E_Pattern(10);

// * * * * * * * * * * *
// *
// *
// *
// *
// * * * * * * * * * *
// *
// *
// *
// *
// * * * * * * * * * * * 