// Reverse the given number 
//leetcodeProblem-  https://leetcode.com/problems/reverse-integer/submissions/1492453155/

function revrseNum(num) {

    let n = num.toString(); // number => stringNum 123 => '123'
    let revesedNumber = [];

    for (let i = n.length - 1; i >= 0; i--) {
        if (n[i] === '-') {     // number incounter any negative sign then it will add in first
            revesedNumber.unshift(n[i])
        } else {
            revesedNumber.push(n[i]);
        }
    }

    // num is 0 
    if (num === 0) {
        console.log(0);
        return
    }

    let reversedStr = revesedNumber.join('') // array => stringNumber "12345"
    let reversedNum = parseInt(reversedStr); // stringNum => Number  12345

    // number  must be only 32-bit
    if (reversedNum > 2 ** 31 - 1 || reversedNum < -(2 ** 31)) {  // if any number out of this range then it will return 0
        console.log(0);
    } else {
        console.log(reversedNum)
    }
}

revrseNum(123);  // 321
revrseNum(456798); // 897654
revrseNum(-987); // -789
revrseNum(0);   // 0
revrseNum(12345678900998987876); // 0