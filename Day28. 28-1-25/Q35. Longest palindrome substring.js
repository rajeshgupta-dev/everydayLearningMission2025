// Find longest palindrom SubString from given str/

function longestPal(str) {

    let longestPal = ' ';
    // Find SubString
    for (let i = 0; i < str.length; i++) {
        let subStr = '';
        for (let j = i; j < str.length; j++) {
            subStr += str[j];
            if (isPal(subStr)) {
                // Find Longest Pal
                if (subStr.length > longestPal.length) {
                    longestPal = subStr;
                }
            }
        }

    }
    console.log(longestPal);
}
// Find palindrome
function isPal(str) {

    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    if (reversedStr === str) {
        return true;
    }
}

longestPal("thisracecarisgood"); // racecar
longestPal("masai"); // asa
longestPal("malayalam") // malayalam
