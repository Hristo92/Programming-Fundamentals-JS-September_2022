function printAndSum(start, end){

    let currentNumber = 0;
    let space = "";

    for (let i = start; i <= end; i++) {

        space += i + ' ';
        currentNumber += i;

    }
    console.log(space);
    console.log(`Sum: ${currentNumber}`);
    
}
printAndSum(5, 10);