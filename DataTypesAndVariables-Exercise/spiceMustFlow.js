function spiceMustFlow(num) {

    let miningCrewEndShift = 26;
    let miningCrewExhausted = 26;
    let totalYield = 0;
    let days = 0;
    let yieldDay = 0;
    let totalForMiners = miningCrewEndShift + miningCrewExhausted;


    for (let i = num; i >= 100; i -= 10) {

        yieldDay = i - miningCrewEndShift;
        totalYield += yieldDay;
        days++;

    }

    
    if (yieldDay > 0) {
      
        totalYield -= miningCrewExhausted;
    }

    console.log(days);
    console.log(totalYield);

    
}
spiceMustFlow(111)