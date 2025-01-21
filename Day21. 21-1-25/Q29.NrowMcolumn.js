// Q N number of Row and M number of Column

function numberOfRowAndColumn(N, M) {
    // Initialize the 2D array
    const arr = [];

    // Fill the array with sequential(next) numbers
    let num = 1;
    for (let i = 0; i < N; i++) {
        arr[i] = []; // Create a new row
        for (let j = 0; j < M; j++) {
            arr[i][j] = num; // Assign the current number
            num++; // Increment the number
        }
    }

    // Print the 2D array
    for (let i = 0; i < N; i++) {
        console.log(arr[i].join(' ')); // Join elements of each row with a space
    }
}
const N = 4; // Number of rows
const M = 3; // Number of columns
// numberOfRowAndColumn(N,M);
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12

numberOfRowAndColumn(5, 8);
// 1 2 3 4 5 6 7 8
// 9 10 11 12 13 14 15 16
// 17 18 19 20 21 22 23 24
// 25 26 27 28 29 30 31 32
// 33 34 35 36 37 38 39 40