// Question. find pprime between  the given number.

function findPrime(num) {

    let primeNum = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) { // if isPrime number is true then it will add the number in primeNum
            primeNum.push(i)
        }
    }
    console.log(primeNum.join(' '))
}
function isPrime(num) {   // this function checks  how factor of numbers ,  
    // if any number has more than 2 facter then it will return false otherwise true.
    fac = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            fac++
        }
    }
    if (fac === 2) {
        return true;
    } else {
        return false;
    }
}

findPrime(20);