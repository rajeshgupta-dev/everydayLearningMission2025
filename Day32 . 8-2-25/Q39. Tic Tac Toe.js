// Q Find the winner of Tic Tac Toe game 

function ticTacToe(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[0][i] === matrix[0][i + 1]) {
            console.log(matrix[0][i]);
            return
        }
    }
    for (let i = matrix.length - 1; i >= 0; i--) {
        if (matrix[i][0] === matrix[i][i]) {
            console.log(matrix[i][i])
            return
        }
    }


}
let arr = [
    ["x", "o", "x"],
    ["o", "x", "x"],
    ["o", "o", "o"],
]
ticTacToe(arr)  // o

let arr2 = [
    ["x", "x", "x"],
    ["o", "0", "x"],
    ["x", "o", "o"],
]
ticTacToe(arr2); // x