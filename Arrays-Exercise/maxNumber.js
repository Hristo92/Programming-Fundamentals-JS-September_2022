function maxNumber(array){

    let newArray = [];
    let currentNumber = 0;


    for (let i = 0; i < array.length; i++){

        let isBigger = true;
        currentNumber = array[i];

        for (let j = i + 1; j < array.length; j++) {

            if (currentNumber <= array[j]) {
                isBigger = false;
            }
        }
        if (isBigger) {

            newArray.push(currentNumber)
            
        }
        


       
    

        
    }
    console.log(newArray.join(' '));


 
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);