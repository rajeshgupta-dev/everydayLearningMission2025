// Q36 chekc  two sting is angagram ?
 
function isAngagram(str1, str2) {

    let result1 = str1.replace(/\s+/g, '').split('').sort().join('').toLowerCase();
    let result2 = str2.replace(/\s+/g, '').split('').sort().join('').toLowerCase();

    console.log(result1 === result2); 
  }
  
  isAngagram("anagram", "nag a ram");  //yes
  isAngagram("masai ","maa is ")    // yes
  
