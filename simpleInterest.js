function simpleInterest(principle, rate, time){
    interest = (principle * rate * time) / 100;
    console.log('total interest is ' + interest);
    total = principle + interest;
    console.log('total amount is ' + total);
}

simpleInterest(150000, 6, 3);