function sumEvenNumbers(arrayOfStrings) {

    let sum = 0;

    for (let i = 0; i < arrayOfStrings.length; i++) {

        let arrayOfNumbers = Number(arrayOfStrings[i]);
        if (arrayOfNumbers % 2 === 0) {
            sum += arrayOfNumbers;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])