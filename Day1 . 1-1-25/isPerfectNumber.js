// Question . check given number is perfect number or not .
// perferc number - numbere that all possible divisible sum ==  number
// 6 == 1+2+3, 28 == 1+2+4+7+14

function isPerferNum(num){
     
    let numDiviibleSum=0;
    for(let i=1; i<num; i++){
        if(num % i===0){
            numDiviibleSum+=i;            
        }
    }
    console.log(num==numDiviibleSum);
}
isPerferNum(6);
isPerferNum(20);
isPerferNum(30);
isPerferNum(28);
isPerferNum(100);