function toDecimal(v) {
    let binary = '';
    if(typeof v == 'string') {
      binary = v.split();
    } else {
        binary = v.toString().split();
    }
    let decimal = 0;
    for(let i = 0; i < binary.length; i++) {
        decimal = (decimal * 2) + binary[i];

    }
    return decimal;
}
 let dec = toDecimal(00001001);
 console.log(dec);