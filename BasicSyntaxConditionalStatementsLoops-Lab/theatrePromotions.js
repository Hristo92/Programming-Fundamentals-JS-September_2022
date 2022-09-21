function theatrePromotions(dayType, age){

    let money = 0;

    if(dayType === "Weekday"){
        if(age >= 0 && age <= 18){
            money = 12;
        }else if(age > 18 && age <= 64){
            money += 18;
        }else if(age > 64 && age <= 122){
            money = 12;
        }
    }else if(dayType === "Weekend"){
        if(age >= 0 && age <= 18){
            money = 15;
        }else if(age > 18 && age <= 64){
            money = 20;
        }else if(age > 64 && age <= 122){
            money = 15;
        }
    }else if(dayType === "Holiday"){
        if(age >= 0 && age <= 18){
            money = 5;
        }else if(age > 18 && age <= 64){
            money = 12;
        }else if(age > 64 && age <= 122){
            money = 10;
        }
    }

    if(age < 0 || age > 122){
        console.log("Error!");
    }else{
        console.log(`${money}$`);

    }

}
theatrePromotions("Weekday", 0)