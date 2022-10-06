function simpleCalculator(num1, num2, operator) {

    let result = 0;

    switch (operator) {
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;        
    }

    return(result)
}
let something = simpleCalculator(12, 19, 'add');
console.log(something);

//function simpleCalculator(numOne, numTwo, operator){
//    
//
//
//}
//let sum = simpleCalculator(5, 5, 'multiply');
//console.log(sum);