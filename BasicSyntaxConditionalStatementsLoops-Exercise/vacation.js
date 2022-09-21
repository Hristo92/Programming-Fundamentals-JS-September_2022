function vacation(group, type, day) {

    let price = 0;

    if (type === "Students" && day === "Friday") {
        price = group * 8.45;
        if (group >= 30) {
            price -= price * 0.15;
        }
    } else if (type === "Students" && day === "Saturday") {
        price = group * 9.80;
        if (group >= 30) {
            price -= price * 0.15;
        }
    } else if (type === "Students" && day === "Sunday") {
        price = group * 10.46;
        if (group >= 30) {
            price -= price * 0.15;
        }
    }

    if (type === "Business" && day === "Friday") {
        price = group * 10.90;
        if(group >= 100){
            price = (group * 10.90) - (10 * 10.90);
        }
    } else if (type === "Business" && day === "Saturday") {
        price = group * 15.60;
        if(group >= 100){
            price = (group * 15.60) - (10 * 15.60);
        }
    } else if (type === "Business" && day === "Sunday") {
        price = group * 16;
        if(group >= 100){
            price = (group * 16) - (10 * 16);
        }
    }

    if (type === "Regular" && day === "Friday") {
        price = group * 15;
        if (group >= 10 && group <= 20) {
            price -= price * 0.05;
        }
    } else if (type === "Regular" && day === "Saturday") {
        price = group * 20;
        if (group >= 10 && group <= 20) {
            price -= price * 0.05;
        }
    } else if (type === "Regular" && day === "Sunday") {
        price = group * 22.50;
        if (group >= 10 && group <= 20) {
            price -= price * 0.05;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}
vacation(100, "Business", "Saturday")