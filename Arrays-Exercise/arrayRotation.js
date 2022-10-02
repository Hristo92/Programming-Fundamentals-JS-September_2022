function arrayRotation(array, rotations){


    let rotationsExecuted = 0;
    let lastItem = ``;
   
    while (rotations > rotationsExecuted) {
        let newArray = [];
        lastItem = array[0]
        for (let i = 0; i < array.length-1; i++) {
            newArray.push(array[i + 1])
        }
        newArray.push(lastItem)
        rotationsExecuted++;
        array = newArray;
    }

    console.log(array.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);