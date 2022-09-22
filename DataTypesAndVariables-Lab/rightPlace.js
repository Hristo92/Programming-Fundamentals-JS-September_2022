function rightPlace(firstWord, char, secondWord){

    let res = firstWord.replace('_', char);
    let output = res === secondWord? "Matched": "Not Matched";

    console.log(output);

}
rightPlace('Str_ng', 'i', 'String');