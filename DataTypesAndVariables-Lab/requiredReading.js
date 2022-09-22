function requiredReading(currentPages, pagesPerHour, days){

    let currentBookHours = currentPages / pagesPerHour;
    let hoursNeeded = currentBookHours / days;

    console.log(hoursNeeded);

}
requiredReading(432, 15, 4);