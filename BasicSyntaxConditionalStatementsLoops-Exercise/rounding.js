function rounding(num, precision){

    if(precision > 15){
        precision = 15;
    }
    console.log(`${parseFloat(num.toFixed(precision))}`);

}
rounding(3.14159265355248545369584582632, 2)