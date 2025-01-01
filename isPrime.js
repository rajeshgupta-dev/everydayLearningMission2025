// Question . check given number is prime number ?

function isPrime(num) {

    // let factor = 0;
    // for (let i = 1; i <= num; i++) {
    //     if (num % i === 0) {
    //          factor++;
    //     }
    // }

    // console.log(factor === 2)

    //------------------------------------------------------------------

    if (num <= 1) {
        console.log(num, "is not Prime number");
        return;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            console.log(num, "is not Prime Number ");
            return;
        }
    }
    console.log(num, "is a Prime Number ");

    // ---------------------------------------------------------

}
isPrime(20);
isPrime(15);
isPrime(13);
isPrime(2);
isPrime(0);


