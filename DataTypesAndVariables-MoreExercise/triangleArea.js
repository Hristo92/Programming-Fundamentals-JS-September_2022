function triangleArea(sideA, sideB, sideC){

    let result = (sideA + sideB + sideC) / 2;
    let res = Math.sqrt(result * (result - sideA) * (result - sideB) * (result - sideC));
    console.log(res);

}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);