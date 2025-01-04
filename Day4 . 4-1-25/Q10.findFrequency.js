// Question: Find the Frequency of Elements in an Array

function findFrequency(arr) {
    let obj = {}; // store number as a Object key value pair
    for (let char in arr) {
        let ele = arr[char];
        if (obj[ele]) {
            obj[ele] += 1 // if number is repeating add 1 
        } else {
            obj[ele] = 1  // otherwise assign 1 
        }
    }
    // console.log(obj)  // retrun as object form, key -value pair

    let newObj = [];
    for (let i in obj) {

        newObj.push(i + ' : ' + obj[i]);
    }
    console.log(newObj.join(', '));  // retrun as number key value pair

}
 findFrequency([2, 3, 5, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 3]) // 1 : 8, 2 : 3, 3 : 3, 4 : 1, 5 : 1