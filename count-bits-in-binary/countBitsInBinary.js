// Function to count number of 1's in binary representation from 0 to n

function countBitsInBinary(n) {
    let result = []; // Array to store the counts

    // Loop from 0 to n
    for (let i = 0; i <= n; i++) {
        // Convert number to binary (e.g., 5 -> '101')
        let binary = i.toString(2);

        // Count the number of '1's in the binary string
        let onesCount = binary.split("1").length - 1;

        // Add the count to the result array
        result.push(onesCount);
    }

    // Print the result as space-separated values
    console.log(result.join(" "));
}

// 🔁 Test cases
countBitsInBinary(2);   // Output: 0 1 1
countBitsInBinary(5);   // Output: 0 1 1 2 1 2
countBitsInBinary(8);   // Output: 0 1 1 2 1 2 2 3 1
countBitsInBinary(0);   // Output: 0
countBitsInBinary(10);  // Output: 0 1 1 2 1 2 2 3 1 2 2
countBitsInBinary(20);  // output: 0 1 1 2 1 2 2 3 1 2 2 3 2 3 3 4 1 2 2 3 2
