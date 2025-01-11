// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because num[0] + num[1] == 9, we return [0, 1].


// 1st approach
function twoSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                console.log([i, j]);
                return
            }
        }
    }
    console.log(-1)
}
twoSum([1, 7, 2, 3, 4, 5], 8)    // [0,1]
twoSum([1,6,9,8,6],14);   // [1,3];
twoSum([0,1,5,4,6],2) ;  // -1