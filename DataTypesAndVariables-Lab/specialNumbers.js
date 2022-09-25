function specialNumbers(num) {

    let number = Number(num);

    for (let i = 1; i <= number; i++) {

        if (i == '5' || i =='7') {
                console.log(`${i} -> True`);

        }else if(i >= 10){
            let string = String(i);
            let sum = Number(string[0]) + Number(string[1]);
            if(sum == 5 || sum == 7 || sum == 11){
                console.log(`${i} -> True`);
            }else{
                console.log(`${i} -> False`);
            }
        }else{
            console.log(`${i} -> False`);
        }

        
    }

}
specialNumbers(20); 