function condenseArrayToNumber(array){

    let condensed = [];
    let numbers = [];

    for (let i = 0; i < array.length - 1; i++) {

        numbers.push(array[i]);
        for (let j = 0; j < numbers.length - 1; j++) {
            condensed+=j;
            
        }
    }
    console.log(condensed);

}
condenseArrayToNumber([2,10,3]);