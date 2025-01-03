// Jenrate Random password from given string
// This Program , convert any name to a random Password 

function jenratePassword(str) {

    let number = ""; // str to store number
    for (let i = 1; i <= str.length; i++) {  // count length of str for number
        number += i;
    }
    let char = str;
    let specialChar = '!@#$&*';

    let joinStr = char + specialChar + number;  // Add all char
    let pass = '';

    // Add one random uppercase letter 
    let uppercase = char[Math.floor(Math.random() * char.length)].toUpperCase();
    pass += uppercase;

    // Add one random lowercase letter
    let lowercase = char[Math.floor(Math.random() * char.length)].toLowerCase();
    pass += lowercase;

    for (let i = 2; i <= str.length; i++) {
        let s = Math.floor(Math.random() * joinStr.length);
        pass += joinStr[s];
    }

    let password = pass.replace(/\s+/g, '')   // remove all spcace from the string
    console.log(password)

}
jenratePassword("Mahandra Singh Dhoni"); // M&201@42h5918n1r2513@2
jenratePassword('Raj'); // Rj!#