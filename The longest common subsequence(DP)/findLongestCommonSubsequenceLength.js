//   Finds the length of the Longest Common Subsequence (LCS)
//   between two strings using Dynamic Programming.

function findLongestCommonSubsequenceLength(str1, str2) {

    const m = str1.length;
    const n = str2.length;

    // Step 1: Create a DP table initialized to 0
    // dp[i][j] will store length of LCS of str1[0..i-1] and str2[0..j-1]
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Step 2: Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                // Characters match: add 1 to the previous diagonal value
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // Characters don't match: take max from top or left
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Step 3: Print the length of LCS (bottom-right cell)
    console.log(dp[m][n]);
}

findLongestCommonSubsequenceLength("AEDFHR", "ABCDGH");  // Output: 3
findLongestCommonSubsequenceLength("AGGTAB", "GXTXAYB"); // Output: 4
findLongestCommonSubsequenceLength("ABCDEF", "FBDAMN"); // Output: 2
findLongestCommonSubsequenceLength("ABC", "DEF");       // Output: 0
findLongestCommonSubsequenceLength("", "");             // Output: 0
findLongestCommonSubsequenceLength("ABC", "");          // Output: 0
findLongestCommonSubsequenceLength("A", "A");           // Output: 1