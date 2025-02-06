// Trvers matrix in N .
function nTraversal(matrix) {

    let temp = [];
    // 1st row 1st col
    for (let i = matrix.length - 1; i >= 0; i--) {
        temp.push(matrix[i][0]);
    }
    // row === col
    for (let i = 1; i < matrix.length; i++) {
        temp.push(matrix[i][i]);
    }
    // last row last col
    for (let i = matrix.length - 2; i >= 0; i--) {
        temp.push(matrix[i][matrix.length - 1])
    }
    console.log(temp.join(" "));
};

let arr2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
]
nTraversal(arr2)  // 1 1 1 1 1 2 3 4 5 5 5 5 5

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
nTraversal(arr)  // 7 4 1 5 9 6 3