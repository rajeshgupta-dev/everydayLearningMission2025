// chekc given str after removing a char , is palindrome or not?
function validPalindrome(str){
     let left = 0;
     let right = str.length-1;
     
     function isPal(s){
       let left = 0;
       let right = s.length-1;
     while(left < right){
       if(s[left] !== s[right]){
          return false
       }
       left++;
       right--;
     }
     return true
    }
    
    while(left < right){
      if (str[left] !== str[right]){ 
        if(isPal(str.slice(left + 1, right + 1)) || isPal(str.slice(left, right))){
          console.log("YES")
          return
        }else{
          console.log("NO")
          return
        }
      }
      left++;
      right--;
    }
    
    console.log("YES");
}
validPalindrome("abca"); // yes - aba / aca
validPalindrome("abc")  // NO 
validPalindrome("raceecar");  // yes