function sumDigits(number){

        number = number.toString();
        let num = number.length;
        let sum = 0;

        for (let i = 0; i < num; i++) {

                let currentNumber = Number(number[i])
                sum += currentNumber;
            
        }
        console.log(sum);

}
sumDigits(543);