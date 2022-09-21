function sumOfOddNumbers(num) {
    let currentNumber = 0;
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        currentNumber += 1;
        sum += currentNumber;

        console.log(currentNumber);
        currentNumber++;
    }

    console.log(`Sum: ${sum}`);


}
sumOfOddNumbers(3)