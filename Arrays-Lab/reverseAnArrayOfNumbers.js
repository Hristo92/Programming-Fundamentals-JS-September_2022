function reverseAnArrayOfNumbers(num, array){

        let newArray = [];

        for (let i = 0; i < num; i++) {

            newArray.push(array[i]);
           
            
        }
        newArray.reverse();

        console.log(newArray.join(' '));


}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);