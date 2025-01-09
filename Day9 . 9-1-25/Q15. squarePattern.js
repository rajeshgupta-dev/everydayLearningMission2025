// Print the square pattern 

function squarePattern(n) {
    for (let i = 1; i <= n; i++) {
        let temp = "";
        if (i == 1 || i == n) {
            for (let j = 1; j <= n; j++) {
                temp += "#" + " "
            }
        } else {
            for (let j = 1; j <= n; j++) {
                if (j == 1 || j == n) {
                    temp += "#"+" "
                } else {
                    temp += "  "
                }
            }
        }
        console.log(temp);
    }

}
 squarePattern(3);
// # # #
// #   #
// # # #

// squarePattern(6);
// # # # # # #
// #         #
// #         #
// #         #
// #         #
// # # # # # #

// squarePattern(9)
// # # # # # # # # #
// #               #
// #               #
// #               #
// #               #
// #               #
// #               #
// #               #
// # # # # # # # # #

// squarePattern(13)
// # # # # # # # # # # # # # 
// #                       # 
// #                       #
// #                       #
// #                       #
// #                       #
// #                       #
// #                       #
// #                       #
// #                       #
// #                       #
// #                       #
// # # # # # # # # # # # # #
