function commonElements(array1, array2){

   for (let i = 0; i < array1.length; i++) {

    if (array2.includes(array1[i])) {

        console.log(array1[i]);
        
    }
    
   }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

);