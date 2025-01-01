 //Reverse a string without using built-in functions"

 function reverseString(str){
       
    let reversedStr = '';
    for(let i=str.length-1; i>=0; i--){
        reversedStr+=str[i];
    }
    console.log(str,'=>', reversedStr);
    
 }
 reverseString("rajesh");
 reverseString("Ramyayan");
 reverseString("INDIA");
 reverseString("Hindustan");
 reverseString("Dhoni");
 reverseString("Hello My Name is Raj");