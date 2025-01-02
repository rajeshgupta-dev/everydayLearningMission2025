// Write a Program that check given String is Palindrome?

function isPalindrome(str){

    let reversedStr='';
    for(let i=str.length-1; i>=0; i--){
        reversedStr+=str[i];
    }
    console.log(str.toLowerCase()===reversedStr.toLowerCase());
}
isPalindrome("Raj"); // false
isPalindrome("Mom");  // true
isPalindrome("Nitin"); // true
isPalindrome("India");  // false