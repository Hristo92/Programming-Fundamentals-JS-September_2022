function evenAndOddSubtraction(array){

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < array.length; i++) {

        let currentNumber = array[i];

        if (currentNumber % 2 === 0) {
            sumEven += currentNumber ;
            
        }else{
            sumOdd += currentNumber;
        }
        
    }
    let result = sumEven - sumOdd;

    console.log(`${result}`);

}
evenAndOddSubtraction([3, 5, 7, 9])