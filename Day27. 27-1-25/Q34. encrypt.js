// encrypt the message .  Jump to next char K time 

function encryptIt(S, K) {
    let encryptedString = "";
    for (let i = 0; i < S.length; i++) {
        if (S[i].charCodeAt() >= 65 && S[i].charCodeAt() <= 90) {   // uppercase
            encryptedString += String.fromCharCode((S[i].charCodeAt() - 65 + K) % 26 + 65);
        } else if (S[i].charCodeAt() >= 97 && S[i].charCodeAt() <= 122) {  // lowerCase
            encryptedString += String.fromCharCode((S[i].charCodeAt() - 97 + K) % 26 + 97);
        } else if (S[i].charCodeAt() >= 48 && S[i].charCodeAt() <= 57) {  // Number
            encryptedString += String.fromCharCode((S[i].charCodeAt() - 48 + K) % 10 + 48);
        } else {
            encryptedString += S[i];
        }
    }
    console.log(encryptedString);
}
encryptIt("rajesh", 7); // yhqlzo
encryptIt("yhqlzo", -7);  // rajesh
encryptIt("MS Dhoni", 7);  // TZ Kovup
encryptIt("TZ Kovup", -7)  // MS Dhoni
encryptIt("Hello World!", 3); // Khoor Zruog!
encryptIt("Hello World!", -3); // Ebqqb Tloia!
encryptIt("abc 123!", 5); // fgh 678!
encryptIt("No Change!", 0); // No Change!
encryptIt("!@# 12345", 2); // !@# 34567
encryptIt("abcdefghijklmnopqrstuvwxyz", 1); // bcdefghijklmnopqrstuvwxyza
