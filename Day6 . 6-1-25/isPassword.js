// Check given Password in Currect or not , menas 
// it must have an Upper cahr,lower char, special char (!@#$%&*) and number
// and length should be >= 8

function isPassword(str) {

    const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
    const number = '1234567890';
    const specialChar = '!@#$%&*';

    let isUpperChar = false;
    let isLowerCase = false;
    let isNumber = false;
    let isSpecialChar = false;
    let isLength = false;



    for (let i = 0; i < str.length; i++) {
        if (upperChar.includes(str[i])) {  // Checks for UpperCase letter
            isUpperChar = true;
        }
        if (lowerChar.includes(str[i])) {  // Checks  LowerCase Letter
            isLowerCase = true;
        }
        if (number.includes(str[i])) {   // Checks numbers
            isNumber = true;
        }
        if (specialChar.includes(str[i])) {  // Checks for Special Char "!@#$%&*"
            isSpecialChar = true;
        }
        if (str.length >= 8) {  // Cheks lengths 
            isLength = true;
        }

    }

    // Check , if all are present  retrun true otherwise false
    if (isLowerCase && isNumber && isSpecialChar && isUpperChar && isLength) {
        console.log(true);
    } else {
        console.log('You have enter wrong password , the passwrd - ')
    }

    // if any of the condition is false then dispaly message for that
    if (isUpperChar == false) {
        console.log('Must be an UpperCase');
    }
    if (isLowerCase == false) {
        console.log('Must Be a LowerCase');

    }
    if (isSpecialChar == false) {
        console.log('Must be a Speical Char "!@#$%&*" ');

    }
    if (isNumber == false) {
        console.log('Must be a number');

    }
    if (isLength == false) {
        console.log("The Password Length must be >= 8");

    }

    console.log('----------------------------')

}
// isPassword('aB1#aaaaaaaaaa');
isPassword('abcjd@#');
isPassword('ABCdefg8&@');
isPassword('12345Ght');