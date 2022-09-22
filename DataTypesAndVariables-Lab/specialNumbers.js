function specialNumbers(num){

    let sum = 0;
    let result = '';
 
    for (let i = 1; i <= num; i++) {
 
        i = i.toString();
 
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
 
        }
 
        result = sum.toString().includes('5') || sum.toString().includes('7') || sum.toString().includes('11');
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
    

}
specialNumbers(15);