function repeatString(string, count){

    let newString = '';

    for (let i = 0; i < count; i++) {
        newString+=string;
    }

    return(newString);
}
let solve = repeatString('abc', 3);
console.log(solve);