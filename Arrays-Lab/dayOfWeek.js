function dayOfWeek(num){

    let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    

    if (num < 0 || num > 7) {
        console.log('Invalid day!');
    }else{
        console.log(array[num - 1]);
    }

}
dayOfWeek(11);