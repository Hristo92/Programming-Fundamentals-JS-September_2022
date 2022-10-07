function primeNumberChecker(number){

    //all prime numbers larger than 5 end in 1, 3, 7, or 9
    //`let isPrime = false;

    if (number % number === 0 || number % 1 === 0) {
        isPrime = true;
    }else{
        isPrime = false;
    }

    console.log(isPrime);
}
primeNumberChecker(8);
