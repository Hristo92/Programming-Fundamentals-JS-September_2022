//function reverseString(str) {
//
//    const arrayStrings = str.split("");
//   
//    const reverseArray = arrayStrings.reverse();
// 
//    const joinArray = reverseArray.join("");
//    
//    return joinArray;
//}
//
//function login(username, password){
//
//    while(password == reverseString("username")){
//        console.log("Incorrect password. Try again.");
//    }
//        console.log(`User ${username} logged in.`);
//    
//
//
//}

function login(input){

    let index = 0;
    let username = input[0];
    let password = input[index];
    index++;

    for (let index = 0; index < input.length; index++) {
        if(username === password){
            console.log("Incorrect password. Try again.");
        }
        index++;
    }

    if(username === password){
        console.log(`User ${username} logged in.`);
    }


}

login(['Acer', 'login', 'go', 'let me in', 'Acer']);
//login(['momo', 'omom'])