// Count vowel in the given String;


function countVowel(str) {

    let lowerCaseStr = str.toLowerCase()
    vowelCount = 0;
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === 'a' ||
            lowerCaseStr[i] === 'e' ||
            lowerCaseStr[i] === 'i' ||
            lowerCaseStr[i] === 'o' ||
            lowerCaseStr[i] === 'u') {
             vowelCount++
        }
        // cheking vowel using buid-in methods  
        // if (['a', 'i', 'o', 'e', 'u'].includes(lowerCaseStr[i])) {
        //      vowelCount++
        // }
    }

    console.log(vowelCount);
}
countVowel('Mahendra singh Dhoni');
countVowel("India");