function calculator(num1, operator, num2){

        let sum = 0;

        if (operator === '+') {
            sum = num1 + num2;
            console.log(`${sum.toFixed(2)}`);
        }else if(operator === '-'){
            sum = num1 - num2;
            console.log(`${sum.toFixed(2)}`);

        }else if(operator === '*'){
            sum = num1 * num2;
            console.log(`${sum.toFixed(2)}`);

        }else if(operator === '/'){
            sum = num1 / num2;
            console.log(`${sum.toFixed(2)}`);
        }

}
calculator(5, '+', 10);