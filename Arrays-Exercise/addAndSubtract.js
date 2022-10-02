function addAndSubtract(array){

    let newArray = [];
    let value = 0;
    let sum1 = 0;
    let sum2 = 0;


    for (let i = 0; i < array.length; i++) {

            sum1 += array[i];


        if (array[i] % 2 === 0) {

            value = array[i] + i;

        }else{
            value = array[i] - i;
        }

        newArray.push(value);
        sum2 += newArray[i];

    }
    console.log(newArray);
    console.log(sum1);
    console.log(sum2);

}
addAndSubtract([5, 15, 23, 56, 35]);