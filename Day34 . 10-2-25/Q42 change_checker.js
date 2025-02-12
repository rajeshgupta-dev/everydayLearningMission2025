// Vending Machine Change Problem

function solve(bills) {
  
    let n = bills.length;
    let five = 0;
    let ten = 0;
    let twenty = 0;
    for (let i = 0; i < n; i++) {
        if (bills[i] === 5) {
            five++
        } else if (bills[i] === 10) {
            if (five >= 1) {
                ten++
                five--
            } else {
                console.log("NO");
                return;
            }
        } else if (bills[i] === 20) {
            if (ten >= 1 && five >= 1) {
                twenty++
                ten--;
                five--;
            } else if (five >= 3) {
                twenty++
                five = five - 3
            }
            else {
                console.log("NO");
                return;
            }
        }
    }
    console.log("YES")

}
solve(5, [5, 5, 10, 5, 20]); // YES
solve(3, [5, 5, 20]);  // NO
solve(4, [5, 10, 5, 10]);  // YES


