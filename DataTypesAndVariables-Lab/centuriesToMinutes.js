function centuriesToMinutes(centuries){

    let oneCenturyInYears = centuries * 100;
    let oneCenturyInDays = Math.trunc(oneCenturyInYears * 365.2422);
    let oneCenturyInHours = oneCenturyInDays * 24;
    let oneCenturyInMinutes = oneCenturyInHours * 60;

    console.log(`${centuries} centuries = ${oneCenturyInYears} years = ${oneCenturyInDays} days = ${oneCenturyInHours} hours = ${oneCenturyInMinutes} minutes`);

}
centuriesToMinutes(1)