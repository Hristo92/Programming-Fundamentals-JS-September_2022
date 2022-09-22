function amazingNumbers(num){

        num = num.toString();
        let sum = 0;

        for (let i = 0; i < num.length; i++) {

            sum += Number(num[i]);
            
        }
        
        if(sum.toString().includes('9')){
            console.log(`${num} Amazing? True`);
        }else{
            console.log(`${num} Amazing? False`);

        }
}
amazingNumbers(999);