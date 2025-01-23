
function anagramDetector(S1,S2){

    let str1 = S1.replace(/\s+/g, '');
    let str2 = S2.replace(/\s+/g, '');
    
    let sort1 = str1.split('').sort().join('');
    let sort2 = str2.split('').sort().join('');
    
    if (sort1 === sort2) {
        console.log("True");
    } else {
        console.log("False");
    }

}
anagramDetector("anagram","nag a ram") // true
anagramDetector("ramayan","ram aan") //False
