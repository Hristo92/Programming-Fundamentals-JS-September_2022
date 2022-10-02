function equalArrays(array1, array2) {

    let sum = 0;
    let areEqual = true;

    for (let i = 0; i < array1.length; i++) {

        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;   
            break;
        }else{
            let arrayNum1 = Number(array1[i]);
            sum += arrayNum1;
        }

        
    }

    if (areEqual) {

        console.log(`Arrays are identical. Sum: ${sum}`);

    }



}
equalArrays(['1'], ['10']);