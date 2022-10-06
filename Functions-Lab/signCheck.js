function signCheck(numOne, numTwo, numThree){

    let result = Math.sign(numOne * numTwo * numThree);
    if (result === 1) {
        return('Positive');
    }else{
        return('Negative');
    }
}
let some = signCheck(-6,
    -12,
     14
    );
console.log(some);