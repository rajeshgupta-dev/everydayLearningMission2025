/**
 * Function to check whether one string is a subsequence of another.
 * Prints "YES" if s1 is a subsequence of s2, otherwise "NO".
 *
 * @param {string} s1 - The string to check as a subsequence.
 * @param {string} s2 - The string to check against.
 */
function checkSubsequence(s1, s2) {
  if (isSubsequence(s1, s2)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

/**
 * Helper function that determines if s1 is a subsequence of s2.
 *
 * A string s1 is a subsequence of s2 if all characters of s1 appear in s2
 * in the same order, but not necessarily consecutively.
 *
 * @param {string} s1 - Candidate subsequence.
 * @param {string} s2 - Full string to check against.
 * @returns {boolean} - true if s1 is a subsequence of s2, false otherwise.
 */
function isSubsequence(s1, s2) {
  let i = 0; // Pointer for s1
  let j = 0; // Pointer for s2

  // Traverse both strings
  while (i < s1.length && j < s2.length) {
    // If characters match, move pointer i (s1)
    if (s1[i] === s2[j]) {
      i++;
    }
    // Always move pointer j (s2)
    j++;
  }

  // If we've matched all characters in s1, it's a subsequence
  return i === s1.length;
}

//  Test Cases
checkSubsequence("abc", "adbce");  // Output: YES
checkSubsequence("ax", "xaa");     // Output: NO
checkSubsequence("ace", "abcde");  // Output: YES
checkSubsequence("aec", "abcde");  // Output: NO

