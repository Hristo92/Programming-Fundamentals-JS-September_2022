function gladiatorExpenses(fights, helmet, sword, shield, armor){

        let totalExpense = 0;
        let brokenShields = 0;


        for (let i = 1; i <= fights; i++) {



            let sum = 0;
            
            if (i % 2 === 0) {
                sum += helmet;
            }
            if (i % 3 === 0) {
                sum += sword;
            }
            if (i % 2 === 0 && i % 3 === 0) {
                sum += shield;
                brokenShields++;

                if (brokenShields % 2 === 0) {
                    sum += armor;
                }                                                                   
                
            }
            

            totalExpense += sum;
            
            
        }
        console.log(`Gladiator expenses: ${totalExpense.toFixed(2)} aureus`);

}
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
gladiatorExpenses(7, 2, 3, 4, 5)